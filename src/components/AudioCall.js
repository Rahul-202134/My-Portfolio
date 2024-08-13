import React, { useRef, useState, useEffect } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

function AudioCall() {
  const [myID, setMyID] = useState('');
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const myAudio = useRef();
  const partnerAudio = useRef();
  const peerRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then((stream) => {
      setStream(stream);
      if (myAudio.current) {
        myAudio.current.srcObject = stream;
      }
    });

    socket.on('yourID', (id) => {
      setMyID(id);
    });

    socket.on('hey', (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, []);

  const callPeer = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: myID,
      });
    });

    peer.on('stream', (stream) => {
      if (partnerAudio.current) {
        partnerAudio.current.srcObject = stream;
      }
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    peerRef.current = peer;
  };

  const acceptCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      socket.emit('acceptCall', { signal: data, to: caller });
    });

    peer.on('stream', (stream) => {
      partnerAudio.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    peerRef.current = peer;
  };

  return (
    <div>
      <div>
        <audio ref={myAudio} autoPlay muted />
      </div>
      <div>
        {callAccepted && <audio ref={partnerAudio} autoPlay />}
      </div>
      <div>
        <input
          type="text"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          placeholder="Enter ID to call"
        />
        <button onClick={() => callPeer(idToCall)}>Call</button>
      </div>
      <div>
        {receivingCall && !callAccepted ? (
          <div>
            <h1>{caller} is calling you</h1>
            <button onClick={acceptCall}>Accept</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AudioCall;

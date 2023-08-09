import React, { useState, useEffect } from 'react';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';
import '../App.css';
import io from 'socket.io-client';

const User2 = () => {
  const [socketId, setSocketId] = useState('');
  const [light, setLight] = useState('');
   const [dataFromServer, setDataFromServer] = useState(null);
  const socket = io('http://localhost:4000'); 

  useEffect(() => {
    
    console.log(socketId);
    
    socket.on('FromAPI', (data) => {
      alert(data)
      setLight(data);
    });
    socket.on('socketId', (id) => {
      setSocketId(id); 
     
    });
    socket.on('responseBack', (data) => {
      setDataFromServer(data);
      
    });
    
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className='App'>
      <h1>User 2</h1>
      <h1>Lights: {light}</h1>
      <p>Socket ID: {socketId}</p> 
      <div className='side-by-side-container'>
        <div className='component-container'>
          <Bedroom socket={socket} />
        </div>
        <div className='component-container'>
          <Kitchen socket={socket} />
        </div>
      </div>
    </div>
  );
};

export default User2;

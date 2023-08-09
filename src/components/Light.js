import React from 'react';
import { connect } from 'react-redux';
import { toggleLight } from '../redux/action/actions';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const Light = ({ id, location, lights, toggleLight }) => {
  const lightStatus = lights[location][id];

  const handleToggleClick = () => {
    console.log("Button clicked for", lights);
    console.log("id", id);
   
    socket.emit('buttonClick');
    socket.emit('lights',lights);
    
   
   
    toggleLight(location, id);
  };

  return (
    <div className='side-by-side-container'>
      <p>{id}&nbsp;&nbsp;&nbsp;&nbsp;</p> 
      <p>Status: {lightStatus ? 'On' : 'Off'}&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <button onClick={handleToggleClick}>Toggle</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lights: state.lights,
});

const mapDispatchToProps = {
  toggleLight,
};

export default connect(mapStateToProps, mapDispatchToProps)(Light);

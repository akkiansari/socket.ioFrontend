import React from 'react';
import Light from './Light';
import '../App.css'

const Bedroom = () => {
  return (
    <div className='App'>
      <h2>Bedroom</h2>
      <Light id="light1" location="Bedroom" />
      <Light id="light2" location="Bedroom" />
    </div>
  );
};

export default Bedroom;

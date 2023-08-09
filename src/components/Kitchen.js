import React from 'react';
import Light from './Light';

const Kitchen = () => {
  return (
    <div>
      <h2>Kitchen</h2>
      <Light id="light1" location="Kitchen" />
      <Light id="light2" location="Kitchen" />
    </div>
  );
};

export default Kitchen;

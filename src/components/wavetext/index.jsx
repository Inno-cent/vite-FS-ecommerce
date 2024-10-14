import React from 'react';
import './index.scss';

const WaveText = ({ text }) => {
  return (
    <>
      <h2 className="first">{text}</h2>
      <h2 className="second">{text}</h2>
    </>
  );
};

export default WaveText;
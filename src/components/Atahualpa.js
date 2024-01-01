import React from 'react';

import './Personaje.css'; 
import AtahualpaImage from '../assets/img/anton.png'; 

const Atahualpa = () => {
  return (
    <div className="atahualpa-container">
      <img src={AtahualpaImage} alt="Atahualpa" className="atahualpa-image" />
      <div className="text-description">
        <h1>Atahualpa</h1>
        <p>
          Atahualpa fue last Inca Emperor who famously encountered the Spanish conquistadors led by Francisco Pizarro. He was captured in the Battle of Cajamarca and eventually executed by the Spaniards, marking a pivotal moment in the Spanish conquest of the Inca Empire.
        </p>
        {/* elements  */}
      </div>
    </div>
  );
};

export default Atahualpa;

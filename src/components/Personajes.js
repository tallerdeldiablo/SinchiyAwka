// src/components/Personajes.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Personajes.css'; // Ensure this CSS file is correctly linked

// Import images from the assets folder
import PintagImage from '../assets/pintag.png';
import QuilagoImage from '../assets/quilago.png';
import AtahualpaImage from '../assets/atahualpa.png';
import RuminahuiImage from '../assets/ruminahui.png';
import JumanjiImage from '../assets/jumanji.png'; // Replace 'jumanji.png' with the actual file name if different
import AntonImage from '../assets/anton.png'; // Replace 'anton.png' with the actual file name if different


// Define your characters array
const characters = [
  { id: 'pintag', name: 'Pintag', image: PintagImage },
  { id: 'quilago', name: 'Quilago', image: QuilagoImage },
  { id: 'atahualpa', name: 'Atahualpa', image: AtahualpaImage },
  { id: 'ruminahui', name: 'Rumiñahui', image: RuminahuiImage },
  { id: 'jumanji', name: 'Jumanji', image: JumanjiImage }, 
  { id: 'anton', name: 'Anton', image: AntonImage } 
];

const Personajes = () => {
  return (
    <div className="personajes-container">
      {characters.map(character => (
        <Link key={character.id} to={`/personajes/${character.id}`} className="character-card">
          <img src={character.image} alt={character.name} className="character-image" />
          <div className="character-name">{character.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Personajes;

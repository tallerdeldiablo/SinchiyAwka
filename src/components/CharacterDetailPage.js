// src/components/CharacterDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetailPage.css';
import characterData from '../characterData';

const CharacterDetailPage = () => {
  const { characterId } = useParams();
  const character = characterData[characterId.toLowerCase()] || {};

  return (
    <div className="character-detail-container">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.description}</p>
    </div>
  );
};

export default CharacterDetailPage;

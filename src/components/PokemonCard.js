import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-content">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="pokemon-details">
          <h3>{pokemon.name}</h3>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

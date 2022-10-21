import React from 'react';
import Pokemon from './Pokemon';
import pokemonList from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      <>
        <h1>Pokédex</h1>
        <ul>
          {pokemonList
            .map((pokemon) => (
              <div key={ pokemon.id }>
                <Pokemon pokemon={ pokemon } />
              </div>))}
        </ul>
      </>
    );
  }
}

export default Pokedex;

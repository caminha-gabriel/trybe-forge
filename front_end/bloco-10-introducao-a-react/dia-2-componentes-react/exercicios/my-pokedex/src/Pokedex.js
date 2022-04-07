import React from 'react';
import data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedexDiv'>
      {data.map((poke) => (<Pokemon pokemon={poke}/>))}
      </div>
    );
  }
}

export default Pokedex;

import React from 'react';

class Pokemon extends React.Component {
  render() {

    const {name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemonDiv'>
        <div>
          <p className='pokemonNameP'>
            {name}
          </p>
          <hr />
          <p className='pokemonTypeP'>
            Type: {type}
          </p>
          <p className='pokemonWeightP'>
            Average Weight: {averageWeight.value} {averageWeight.measurementUnit}
          </p>
        </div>
        <div>
          <img src={ image } alt={name}/>
        </div>
      </div>
    )
  }
}

export default Pokemon;

import React from 'react';

class SimpleInput extends React.Component {
  render() {
    const { labelText, name, type, value, onChange } = this.props;

    return(
      <label htmlFor={ name }>
        { labelText }
        <input
        name={ name }
        id={ name }
        type={ type }
        value={ value }
        onChange={ onChange }/>
      </label>
    )
  }
}

export default SimpleInput;
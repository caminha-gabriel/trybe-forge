import React from 'react';

class SelectInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    
    return(<select
      name='sonho'
      value={value}
      onChange={onChange}
      >
        <option value='Moon'>Moon</option>
        <option value='Automatic House'>Automatic House</option>
        <option value='Memes'>Memes</option>
      </select>)
  }
}

export default SelectInput;
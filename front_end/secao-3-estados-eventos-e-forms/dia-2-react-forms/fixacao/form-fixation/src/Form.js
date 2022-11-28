import React, { Component } from 'react';
import SimpleInput from './SimpleInput';
import SelectInput from './SelectInput';

class Form extends Component {
  constructor() {
    super();

    this.genericEventHandler = this.genericEventHandler.bind(this);
    this.handleNameError = this.handleNameError.bind(this);
    this.handleNumberError = this.handleNumberError.bind(this);

    this.state = {
      charName: '',
      lore: '',
      ipsum: '0',
      sonho: 'Moon',
      boss: true,
      formularioComErros: false,
    };
  }

  handleNameError(value) {
    if (value.length > 18) {
      this.setState({ formularioComErros: true })
      alert('Nome muito grande!')
    }
  }

  handleNumberError(value) {
    if (value < 1) {
      this.setState({ formularioComErros: true })
      alert('Número inválido!')
    }
  }
  genericEventHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    if (name === 'charName') this.handleNameError(value);
    if (name === 'ipsum') this.handleNumberError(value);
  }

  render() {
    return (
      <div className='allDiv'>
        <h1>React Forms Fixation</h1>
        <form className='form'>
          <fieldset>
            <legend>Character Creation</legend>

            <SimpleInput 
              labelText='Character Name:'
              name='charName'
              type='text'
              value={this.state.charName}
              onChange={this.genericEventHandler}
            />

            <SimpleInput
              labelText='Ipsums:'
              name='ipsum'
              type='number'
              value={this.state.ipsum}
              onChange={this.genericEventHandler}
            />

            <label htmlFor='textArea'>
              Bio:
            </label>
            <textarea
            name='lore'
            id='textArea'
            value={this.state.lore}
            onChange={this.genericEventHandler}
            />

          <SelectInput
            value={this.state.ipsum}
            onChange={this.genericEventHandler}
          />

          <div className='checkDiv'>
            <label htmlFor='bossChecker'>
              Você concorda em sofrer nos Bosses do nosso Game ?
            <input
            id='bossChecker'
            name='boss'
            type='checkbox'
            checked={this.state.boss}
            onChange={this.genericEventHandler}/>
            </label>
          </div>

          <label htmlFor='arquivo'>Arquivo:</label>
          <input
          id='arquivo'
          name='arquivo'
          type="file" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
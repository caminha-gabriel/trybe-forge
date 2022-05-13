import React, { Component } from 'react';
import PersonalDataField from './PersonalDataField';
import LastJobDataField from './LastJobDataField';

const states = [
  'None',
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];
class App extends Component {
  constructor() {
    super();

    this.inputHandler = this.inputHandler.bind(this);
    this.cityOnBlur = this.cityOnBlur.bind(this);
    this.showDataBtnClick = this.showDataBtnClick.bind(this);
    this.cleanDataBtnClick = this.cleanDataBtnClick.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      homeType: '',
      showDataDiv: false,
    };
  }

  inputHandler({ target }) {
    const { name, value } = target;
    switch (name) {
      case 'nameInput':
        this.setState({ name: value.toUpperCase() });
        break;
      case 'emailInput':
        this.setState({ email: value });
        break;
      case 'cpfInput':
        this.setState({ cpf: value });
        break;
      case 'addressInput':
        this.setState({ address: value.replace(/[^\w\s]/gi, '') });
        break;
      case 'cityInput':
        this.setState({ city: value });
        break;
      case 'stateSelect':
        this.setState({ state: value });
        break;
      case 'homeType':
        this.setState({ homeType: value });
        break;

      default:
        break;
    }
  }

  cityOnBlur({ target }) {
    const notValidFirstChar = !isNaN(target.value[0]);
    const notValidSecondChar = !isNaN(target.value[1]);
    const notValidThirdChar = !isNaN(target.value[2]);

    if (notValidFirstChar || notValidSecondChar || notValidThirdChar) {
      this.setState({ city: '' });
      alert('City input does not accept numbers as initial characters');
    }
  }

  roleTextAreaOnMouseEnter() {
    alert('Fill this space with atention!');
  }

  showDataBtnClick() {
    this.setState((prevState) => ({
      showDataDiv: !prevState.showDataDiv,
    }));
  }

  cleanDataBtnClick() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: 'Acre',
      homeType: '',
    });
  }

  render() {
    const { name, email, cpf, address, city, state, homeType, showDataDiv } =
      this.state;
    return (
      <div>
        <form>
          <PersonalDataField
            currentState={ this.state }
            states={ states }
            inputHandler={ this.inputHandler }
            cityOnBlur={ this.cityOnBlur }
          />
          <LastJobDataField />
          <button type='button' onClick={this.showDataBtnClick}>Show your Data</button>
          <button type='button' onClick={this.cleanDataBtnClick}>Clean</button>
        </form>
        {showDataDiv && (
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Cpf: {cpf}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Home Type: {homeType}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

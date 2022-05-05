// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      nome: '',
      email: '',
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email, joke } = this.state;

    return (
      <div className="App">
        <div className='JokeDiv'>
        <h1>API Joke</h1>
        <p>{joke}</p>
        </div>
        <div>
          <h1>Teste de inputs</h1>
          <p>
            <label htmlFor="nome">
              Nome
              <input
                type="text"
                id="nome"
                name="nome"
                value={ nome }
                onChange={ (e) => this.handleInput(e) }
              />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                name="email"
                value={ email }
                onChange={ (e) => this.handleInput(e) }
              />
            </label>
          </p>
        </div>
      </div>
    );
  }
}

export default App;

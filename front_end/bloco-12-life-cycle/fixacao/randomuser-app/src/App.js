import React, { Component } from "react";
import UserInfo from "./UserInfo.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false,
      apiData: undefined,
    };
  }

  fetchData() {
      const url = "https://api.randomuser.me/";
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          apiData: responseJson.results[0],
          isLoaded: true
        });
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { isLoaded } = this.state;
    const age = isLoaded ? nextState.apiData.dob.age : undefined;
    if (age > 50) console.log('Ages higher than 50 will not render, try reloading the page!');
    return age < 50; 
  }

  render() {
    const loadingElement = <span>Loading...</span>;
    const { isLoaded } = this.state;
    let picture,
      name,
      email,
      dob = undefined;
    if (isLoaded) {
      ({ picture, name, email, dob } = this.state.apiData);
    }
    return (
      <div>
        {
          !isLoaded 
          ? loadingElement
          : <UserInfo
              img={picture.medium}
              name={`${name.title} ${name.first} ${name.last}`}
              email={email}
              age={dob.age}
            />
        }
      </div>
    );
  }
}

export default App;

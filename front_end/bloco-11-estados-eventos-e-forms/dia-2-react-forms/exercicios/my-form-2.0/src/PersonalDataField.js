import React, { Component } from "react";

export default class PersonalDataField extends Component {
  render() {
    const { currentState, states, inputHandler } = this.props;
    return (
      <fieldset className="personalDataField">
        <legend>Fill your Personal Data</legend>
        <label htmlFor="nameInput">
          Nome:
          <input
            type="text"
            value={currentState.name}
            name="nameInput"
            id="nameInput"
            maxLength={40}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="emailInput">
          Email:
          <input
            type="email"
            value={currentState.email}
            name="emailInput"
            id="emailInput"
            maxLength={50}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="cpfInput">
          CPF:
          <input
            type="number"
            value={currentState.cpf}
            name="cpfInput"
            id="cpfInput"
            maxLength={11}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="addressInput">
          Address:
          <input
            type="text"
            value={currentState.address}
            name="addressInput"
            id="addressInput"
            maxLength={200}
            onChange={inputHandler}
            required
          />
        </label>
        <label htmlFor="cityInput">
          City:
          <input
            type="text"
            value={currentState.city}
            name="cityInput"
            id="cityInput"
            maxLength={28}
            onChange={inputHandler}
            onBlur={this.cityOnBlur}
            required
          />
        </label>
        <label htmlFor="stateSelect">
          State:
          <select
            value={currentState.state}
            name="stateSelect"
            id="stateSelect"
            onChange={inputHandler}
            required
          >
            {states.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <div>
          Select your home type:
          <label htmlFor="apartament">
            Apartament
            <input
              type="radio"
              value="Apartament"
              name="homeType"
              id="apartament"
              onClick={inputHandler}
            />
          </label>
          <label htmlFor="house">
            House
            <input
              type="radio"
              value="House"
              name="homeType"
              id="house"
              onClick={inputHandler}
            />
          </label>
        </div>
      </fieldset>
    );
  }
}

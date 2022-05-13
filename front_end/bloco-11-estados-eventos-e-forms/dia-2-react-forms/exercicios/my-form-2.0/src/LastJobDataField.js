import React, { Component } from "react";

export default class LastJobDataField extends Component {
  render() {
    return (
      <fieldset className="lastJobField">
        <legend>Tell us about your last job</legend>
        <label>
          Talk about your Resumé:
          <textarea maxLength={1000} />
        </label>
        <label>
          What was your Role ?
          <textarea
            maxLength={40}
            onMouseEnter={this.roleTextAreaOnMouseEnter}
            required
          />
        </label>
        <label>
          Tell us about your last Role:
          <textarea maxLength={500} required />
        </label>
      </fieldset>
    );
  }
}

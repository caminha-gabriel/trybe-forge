import React, { Component } from 'react';

class Image extends Component {
  render() {

    const { source, alternativeText } = this.props;

    return (
      <img src={source} alt={alternativeText}></img>
    )
  }
}

export default Image
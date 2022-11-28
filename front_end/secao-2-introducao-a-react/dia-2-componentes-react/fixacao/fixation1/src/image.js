import React from 'react';

class Image extends React.Component {
  render() {
    return <img href={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;
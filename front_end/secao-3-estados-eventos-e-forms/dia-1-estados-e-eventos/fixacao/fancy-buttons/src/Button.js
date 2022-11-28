import React from 'react';

class Button extends React.Component {
  constructor() {
    super()

    this.state = {
      counter: 0,
      color: 'orangeButton',
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const { counter, color } = this.state;
    if (counter % 2 === 0) {
      if (color === 'orangeButton') {
        this.setState(() => ({
          color: 'purpleButton',
        }))
      } 
    } else {
        this.setState(() => ({
          color: 'orangeButton'
        }))
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      counter: estadoAnterior.counter + 1,
    }))

    this.changeColor();
  }

  render() {
    return (
      <button className={this.state.color + ' buttons'} onClick={this.handleClick}>{this.state.counter}</button>
    )
  }
}

export default Button;
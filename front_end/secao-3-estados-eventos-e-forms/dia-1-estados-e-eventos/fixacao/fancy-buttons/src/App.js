import './Button.css';
import React from 'react';
import Button from './Button';

class App extends React.Component {
  constructor() {
    super()
    
    
    this.logThisFunc = this.logThisFunc.bind(this);
  }
  
  log1() {
    console.log('1');
  }
  log2() {
    console.log('2');
  }
  log3() {
    console.log('3');
  }
  
  logThisFunc() {
    console.log(this);
  }

  render() {
    this.logThisFunc();
    return (
      <div className='buttonsDiv'>
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const { img, name, email, age } = this.props;
    return(
      <div className='userInfo'>
        <img src={ img } alt={ name }/>
        <div>
          <p>{ name }</p>
          <p>{ email }</p>
          <p>{ age }</p>
        </div>
      </div>
    )
  }
}

export default UserInfo
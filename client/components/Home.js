import React from 'react';
import Signup from './Signup.js';
import Login from './Login.js';

class Home extends React.Component {
  render(){
    return (
      <div>
        <Signup />
        <Login />
      </div>
    )
  }
}

export default Home;

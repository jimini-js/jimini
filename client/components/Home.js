import React from 'react';
import Signup from './Signup.js';
import Login from './Login.js';

class Home extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      renderLogin: true
    }
  }

  handleClick(){
    let clicked = this.state.renderLogin;

    this.setState({
      renderLogin: !clicked
    })
  }

  render(){
    let signLogin;

    if(this.state.renderLogin){
      signLogin = <Login updateView={this.props.updateView} handleClick={this.handleClick} />
    } else {
      signLogin = <Signup updateView={this.props.updateView} handleClick={this.handleClick} />
    }

    return (
      <div>
        {signLogin}
      </div>
    )
  }
}

export default Home;

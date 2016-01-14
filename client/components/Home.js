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
    this.setState({
      renderLogin: !this.state.renderLogin
    })
  }

  render(){
    let viewBox;

    if(this.state.renderLogin){
      viewBox = <Login updateView={this.props.updateView} handleClick={this.handleClick} />
    } else {
      viewBox = <Signup updateView={this.props.updateView} handleClick={this.handleClick} />
    }

    return (
      <div>
        {viewBox}
      </div>
    )
  }
}

export default Home;

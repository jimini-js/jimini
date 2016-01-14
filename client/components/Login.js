import React from 'react';
import $ from 'jquery';

class Login extends React.Component {
  constructor(){
    super();
    this.getUsernameRef = this.getUsernameRef.bind(this);
    this.getPassRef = this.getPassRef.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsernameRef(ref){
    this.usernameRef = ref;
  }

  getPassRef(ref){
    this.passwordRef = ref;
  }

  handleData(action, data){
    this.props.updateView(action, data);
  }

  handleSubmit(e){
    e.preventDefault();
    let user = this.usernameRef.value;
    let pw = this.passwordRef.value;
    let self = this;

    $.ajax({
      url: '/login',
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
      username: user,
      password: pw,
      }),
      success: function(data){
        console.log('post to /login success');
        if(data.responseText === 'InvalidPassword' || data.responseText === 'InvalidPassword'){
          self.handleData('showHome');
        } else {
          self.handleData('showProfile', data);
        }
      },
      error: function(err){
        console.log('error:', err);
      }
    });

    this.usernameRef.value = '';
    this.passwordRef.value = '';
  }

  render(){
    return (
      <div className="col-sm-12">
        <h1>Login</h1>
        <button onClick={this.props.handleClick} className="btn btn-block btn-primary">Don't have an account? Click here to sign up.</button>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" placeholder="Username" ref={this.getUsernameRef} />
          </div>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" placeholder="Password" ref={this.getPassRef} />
          </div>
          <div className="form-group col-sm-7">
            <button type="submit" className="btn btn-block btn-primary">Log in</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;

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

    var token = localStorage.token || null;

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
        if(data.responseText === 'InvalidPassword' || data.responseText === 'InvalidPassword'){
          self.handleData('showHome');
        } else {
          console.log('this is the data:', data);
          localStorage.token = data.token;
          console.log('this is the localStorage.token: ', localStorage.token);
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
      <div className="login col-sm-12 col-md-4 col-md-pull-1">
        <div className="viewbox">
          <img className="logo" src="./../assets/jimini-logo.png" alt="Jimini Logo" />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-sm-10 col-md-push-1">
              <input type="text" className="form-control" placeholder="Username" ref={this.getUsernameRef} />
            </div>
            <div className="form-group col-sm-10 col-md-push-1">
              <input type="password" className="form-control" placeholder="Password" ref={this.getPassRef} />
            </div>
            <div className="form-group col-sm-10 col-md-push-1">
              <button type="submit" className="btn btn-block">Log in</button>
              <div onClick={this.props.handleClick}>Don't have an account? Click <a>here</a> to sign up.</div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;

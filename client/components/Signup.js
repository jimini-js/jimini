import React from 'react';
import $ from 'jquery';

class Signup extends React.Component {
  constructor(){
    super();
    this.getUsernameRef = this.getUsernameRef.bind(this);
    this.getPassRef = this.getPassRef.bind(this);
    this.getEmailRef = this.getEmailRef.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsernameRef(ref){
    this.usernameRef = ref;
  }

  getPassRef(ref){
    this.passwordRef = ref;
  }

  getEmailRef(ref){
    this.emailRef = ref;
  }

  handleData(action, data){
    this.props.updateView(action, data);
  }

  handleSubmit(e){
    e.preventDefault();
    let user = this.usernameRef.value;
    let pw = this.passwordRef.value;
    let email = this.emailRef.value;
    let self = this;

    var token = localStorage.token || null;

    $.ajax({
      url: '/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: user,
        password: pw,
        email: email
      }),
      success: function(data){
        if(data.name === 'ValidationError'){
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
    this.emailRef.value = '';
  }

  render(){

    return (
      <div className="signup col-sm-12 col-md-4 col-md-pull-1">
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
              <input type="email" className="form-control" placeholder="Email" ref={this.getEmailRef} />
            </div>
            <div className="form-group col-sm-10 col-md-push-1">
              <button type="submit" className="btn btn-block">Sign up</button>
              <div onClick={this.props.handleClick}>
              Have an account? Click <a>here</a> to log in.
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;

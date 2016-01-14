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
      <div className="col-sm-12">
        <h1>Sign up</h1>
        <button onClick={this.props.handleClick} className="btn btn-block btn-primary">Have an account? Click here to log in.</button>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" placeholder="Username" ref={this.getUsernameRef} />
          </div>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" placeholder="Password" ref={this.getPassRef} />
          </div>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" placeholder="Email" ref={this.getEmailRef} />
          </div>
          <div className="form-group col-sm-7">
            <button type="submit" className="btn btn-block btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup;

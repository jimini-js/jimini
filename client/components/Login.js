import React from 'react';
import $ from 'jquery';

class Login extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUsernameRef = this.getUsernameRef.bind(this);
    this.getPassRef = this.getPassRef.bind(this);
  }

  getUsernameRef(ref){
    this.usernameRef = ref;
  }

  getPassRef(ref){
    this.passwordRef = ref;
  }

  handleSubmit(){
    let user = this.usernameRef.value;
    let pw = this.passwordRef.value;

    $.ajax({
      url: '/login',
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
      username: user,
      password: pw,
      email: email
      }),
      success: function(data){
        console.log('post to /signup success');
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
        <h1>Jimini Signup</h1>
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

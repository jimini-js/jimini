import React from 'react';
import Home from './Home.js';
import Profile from './Profile.js';
import PublicProfile from './PublicProfile.js';
import LoginModal from './LoginModal.js';
import Footer from './Footer.js';
import $ from 'jquery';

class Main extends React.Component {
  constructor(){
    super();
    this.close = this.close.bind(this);
    this.updateView = this.updateView.bind(this);
    this.state = {
      isLoggedIn: false,
      showHome: true,
      showProfile: false,
      showPublicProfile: false,
      userInfo: {
        username: '',
      }
    }
  }

  componentWillMount(){
    let self = this;
    if (localStorage.token) {
      $.ajax({
        url: '/authenticate',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          token: localStorage.token
        }),
        success: function(data){
          if(data.responseText === 'InvalidToken' || data.responseText === 'InvalidToken'){
            self.updateView('showHome');
          } else {
            console.log('this is the data:', data);
            if (data.username) {
              self.updateView('showProfile', data.username);
            }
          }
        },
        error: function(err){
          console.log('error:', err);
        }
      });
    } else {
      self.updateView('showHome');
    }
  }

  updateView(action, data){
    let self = this;

    switch(action){
      case 'showHome':
        self.setState({isLoggedIn: false});
        self.setState({showHome: true});
        self.setState({showProfile: false});
        self.setState({showPublicProfile: false});
        self.setState({userInfo: {username: '', wishlist: []}});
        break;
      case 'showProfile':
        self.setState({isLoggedIn: true});
        self.setState({showHome: false});
        self.setState({showProfile: true});
        if (data.loginMessage === ''){
          self.setState({showModal:false});
          console.log('NOT showing login modal');
        }
        else{
          self.setState({showModal:true});
          console.log('showing login modal');
        }
        self.setState({showPublicProfile: false});
        self.setState({userInfo: { username: data.username }});
        break;
      case 'showPublicProfile':
        self.setState({showHome: false});
        self.setState({showProfile: false});
        self.setState({showPublicProfile: true});
        self.setState({userInfo: {username: '', wishlist: []}});
        break;
    }
  }

  close(){
    this.setState({showModal: false})
  }

  render(){
    return (
      <div>
        <h1>Jimini</h1>
        <div className='container'>
          {this.state.showHome ? <Home updateView={this.updateView} /> : null}
          {this.state.showModal ? (
            <LoginModal 
            showModal={this.state.showModal}
            close={this.close}/>
          ):null}
          {this.state.showProfile ? <Profile updateView={this.updateView} userInfo={this.state.userInfo} isLoggedIn={this.state.isLoggedIn} /> : null}
          {this.state.showPublicProfile ? <PublicProfile updateView={this.updateView} /> : null}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main;

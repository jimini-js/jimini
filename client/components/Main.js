import React from 'react';
import Home from './Home.js';
import Profile from './Profile.js';
import PublicProfile from './PublicProfile.js';
import Footer from './Footer.js';

class Main extends React.Component {
  constructor(){
    super();
    this.updateView = this.updateView.bind(this);
    this.state = {
      isLoggedIn: false,
      showHome: true,
      showProfile: false,
      showPublicProfile: false,
      userInfo: {
        username: '',
        wishlist: []
      }
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
        self.setState({showPublicProfile: false});
        self.setState({userInfo: data});
        console.log("new user info", this.state.userInfo);
      case 'showPublicProfile':
        self.setState({showHome: false});
        self.setState({showProfile: false});
        self.setState({showPublicProfile: true});
        self.setState({userInfo: {username: '', wishlist: []}});
        break;
    }
  }

  render(){
    return (
      <div>
        <h1>Jimini</h1>
        <div className='container'>
          {this.state.showHome ? <Home updateView={this.updateView} /> : null}
          {this.state.showProfile ? <Profile updateView={this.updateView} userInfo={this.state.userInfo} /> : null}
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

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
<<<<<<< 79c1aef1e6eb33c1850a63de7bb3288ce79e600b
=======
        wishlist: []
>>>>>>> [refactor] refactors routing for views on Main component
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
        self.setState({userInfo: { username: data.username }});
        console.log("new user info", this.state.userInfo);
        break;
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
<<<<<<< 64ff69be5fa1044be2722406acd77c61b51f876f
<<<<<<< 79c1aef1e6eb33c1850a63de7bb3288ce79e600b
          {this.state.showHome ? <Home updateView={this.updateView} /> : null}
          {this.state.showProfile ? <Profile updateView={this.updateView} userInfo={this.state.userInfo} /> : null}
          {this.state.showPublicProfile ? <PublicProfile updateView={this.updateView} /> : null}
=======
          {this.state.showHome ? <Home updateView={this.state.updateView} /> : null}
          {this.state.showProfile ? <Profile updateView={this.state.updateView} userInfo={this.state.userInfo} /> : null}
          {this.state.showPublicProfile ? <PublicProfile updateView={this.state.updateView} /> : null}
>>>>>>> [refactor] refactors routing for views on Main component
=======
          {this.state.showHome ? <Home updateView={this.updateView} /> : null}
          {this.state.showProfile ? <Profile updateView={this.updateView} userInfo={this.state.userInfo} /> : null}
          {this.state.showPublicProfile ? <PublicProfile updateView={this.updateView} /> : null}
>>>>>>> [feat] implements successful rerouting from login/signup to profile with data
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main;

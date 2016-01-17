import React from 'react';
import Wishlist from './Wishlist.js';
import ItemForm from './ItemForm.js';
import LoginModal from './LoginModal.js';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(){
    super();
    this.updateWishlist = this.updateWishlist.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      username: '',
      wishlist: [],
      showModal: false
    }
  }

  fetchData(){
    let self = this;

    $.ajax({
      url: '/allwishes',
      type: 'GET',
      data: {
        username: self.props.userInfo.username
      },
      success: function(data){
        self.setState({
          username: self.props.userInfo.username,
          wishlist: data
        });
        console.log("WISHLIST DATA:", self.state.wishlist);
      },
      error: function(err){
        console.log('error:', err);
      }
    });

  }

  componentDidMount(){
    setTimeout(this.fetchData, 0);
  }

  updateWishlist(action, item){
    let newWishList;
    if (action === 'add') {
      newWishList = this.state.wishlist.concat([ item ]);
      this.setState({
        wishlist: newWishList
      });
    };
    if (action === 'delete') {
      newWishList = [];

      this.state.wishlist.forEach(wish => {
        if(wish._id !== item){
          newWishList.push(wish);
        }
      });

      this.setState({
        wishlist: newWishList
      });
    }
  }

  handleLogout(){
    localStorage.token='';
    this.props.updateView('showHome');
  }

  // close(){
  //   this.setState({
  //     showModal: false
  //   })
  // }

  render(){
    let userName = this.state.username;
    userName = userName.slice(0,1).toUpperCase() + userName.slice(1);

    return (
      <div className="profile">
        <div className="nav">
         <img src="../assets/jimini-logo.png" alt="jimini logo"/>
         <a onClick={this.handleLogout}>Logout</a>
        </div>
        <div className="jumbotron-header">
          <h1>Welcome {userName}</h1>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ItemForm userInfo={this.props.userInfo} updateWishlist={this.updateWishlist} />
          </div>
        </div>
        <Wishlist wishlist={this.state.wishlist} isLoggedIn={this.props.isLoggedIn} updateWishlist={this.updateWishlist} />
      </div>
    )
  }
}

export default Profile;

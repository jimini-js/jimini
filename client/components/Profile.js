import React from 'react';
import Wishlist from './Wishlist.js';
import ItemForm from './ItemForm.js';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(){
    super();
    this.updateWishlist = this.updateWishlist.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      username: '',
      wishlist: []
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

  render(){
    return (
      <div>
        <button className='btn' onClick={this.handleLogout}>Logout</button>
        <h1>Logged In Profile Page | Welcome {this.state.username}</h1>
        <div className='row'>
          <div className='col-md-12'>
            <ItemForm userInfo={this.props.userInfo} updateWishlist={this.updateWishlist}/>
          </div>
        </div>
        <Wishlist wishlist={this.state.wishlist} isLoggedIn={this.props.isLoggedIn} updateWishlist={this.updateWishlist} />
      </div>
    )
  }
}

export default Profile;

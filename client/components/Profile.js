import React from 'react';
import Wishlist from './Wishlist.js';
import ItemForm from './ItemForm.js';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(){
    super();
    this.updateWishlist = this.updateWishlist.bind(this);
    this.fetchData = this.fetchData.bind(this);
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

  updateWishlist(item){
    let newWishList = this.state.wishlist.concat([ item ]);
    this.setState({
      wishlist: newWishList
    });
  }

  render(){
    return (
      <div>
        <h1>Logged In Profile Page | Welcome {this.state.username}</h1>
        <div className='row'>
          <div className='col-md-12'>
            <ItemForm userInfo={this.props.userInfo} updateWishlist={this.updateWishlist}/>
          </div>
        </div>
        <Wishlist wishlist={this.state.wishlist} />
      </div>
    )
  }
}

export default Profile;

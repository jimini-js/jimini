import React from 'react';
import Wishlist from './Wishlist.js';
import ItemForm from './ItemForm.js';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(){
    super();
    this.updateWishlist = this.updateWishlist.bind(this);
    this.state = {
      username: '',
      wishlist: []
    }
  }

  componentDidMount(){
    let self = this;

    this.setState({
      username: this.props.userInfo.username
    });

    $.ajax({
      url: '/allwishes',
      type: 'GET',
      data: {
        username: this.state.username
      },
      success: function(data){
        self.setState({
          username: self.props.userInfo.username,
          wishlist: data
        });
      },
      error: function(err){
        console.log('error:', err);
      }
    });
  }

  updateWishlist(item){
    console.log(item);
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
            <ItemForm updateWishlist={this.updateWishlist}/>
          </div>
        </div>
        <Wishlist wishlist={this.state.wishlist} />
      </div>
    )
  }
}

export default Profile;

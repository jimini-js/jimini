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

    console.log("inside fetch data");
    console.log("state", this.state);

    $.ajax({
      url: '/allwishes',
      type: 'GET',
      data: {
        username: self.props.userInfo.username
      },
      success: function(data){
        console.log(data);
        self.setState({
          username: self.props.userInfo.username,
          wishlist: data
        });
      },
      error: function(err){
        console.log('error:', err);
      }
    });

    console.log("after ajax", this.state);

  }

  componentDidMount(){
    // let self = this;
    // let query = this.props.userInfo.username;
    // console.log(typeof query);

    // this.setState({
    //   username: this.props.userInfo.username
    // });

    setTimeout(this.fetchData, 3);
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
            <ItemForm userInfo={this.props.userInfo} updateWishlist={this.updateWishlist}/>
          </div>
        </div>
        <Wishlist wishlist={this.state.wishlist} />
      </div>
    )
  }
}

export default Profile;

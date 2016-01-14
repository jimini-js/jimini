import React from 'react';
import Wishlist from './Wishlist.js';
import ItemForm from './ItemForm.js';
import $ from 'jquery';

class PublicProfile extends React.Component {
  constructor(){
    super();
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
        username: 'charles2'
      },
      success: function(data){
        console.log('public profile data', data);
        self.setState({
          // username: self.props.userInfo.username,
          wishlist: data
        });
      },
      error: function(err){
        console.log('error', err);
      }
    });

    console.log('after ajax', this.state);

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

  render(){
    return (
      <div>
        <h1>Public Profile Page | Welcome to {this.state.username} Wishlist</h1>
        <div className='row'>
          <div className='col-md-12'>
            <Wishlist userInfo={this.props.userInfo} wishlist={this.state.wishlist} />
          </div>
        </div>
      </div>
    )
  }
}

export default PublicProfile;

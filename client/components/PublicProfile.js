import React from 'react';
import Wishlist from './Wishlist.js';
import ItemForm from './ItemForm.js';
import $ from 'jquery';

class PublicProfile extends React.Component {
  constructor(){
    super();
    this.getUsernameRef = this.getUsernameRef.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      username: '',
      wishlist: []
    }
  }

  componentWillMount(){
    let self = this;

    if (this.props.params !== 'search') {
      $.ajax({
        url: '/allwishes',
        type: 'GET',
        data: {
          username: self.props.params.username
        },
        success: function(data){
          self.setState({
            username: self.props.params.username,
            wishlist: data
          });
        },
        error: function(err){
          console.log('error', err);
        }
      });
    }
  }

  getUsernameRef(ref){
    this.usernameRef = ref;
  }

  fetchData(e){
    e.preventDefault();
    let self = this;
    let user = this.usernameRef.value;

    $.ajax({
      url: '/allwishes',
      type: 'GET',
      data: {
        username: user
      },
      success: function(data){
        self.setState({
          username: user,
          wishlist: data
        });
      },
      error: function(err){
        console.log('error', err);
      }
    });

  }

  render(){
    return (
      <div className='publicprofile'>
        <div className='publicprofile-jumbotron'>
        <img src="../assets/jimini-logo.png" alt="jimini logo"/>
        <h1>Find a wishlist</h1>
          <form>
            <input type="text" placeholder="Enter a Name" ref={this.getUsernameRef} />&nbsp;
            <button type='submit' className='btn btn-primary' onClick={this.fetchData}>Search</button>
          </form>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <Wishlist userInfo={this.props.userInfo} wishlist={this.state.wishlist} giftIcon={this.state.giftIcon} />
          </div>
        </div>
      </div>
    )
  }
}

export default PublicProfile;

import React from 'react';
import Item from './Item.js';
import $ from 'jquery';

class Wishlist extends React.Component {
  constructor(){
    super()
    this.removeWish = this.removeWish.bind(this);
    this.markAsBought = this.markAsBought.bind(this);
    this.state = {
      wishlist: []
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      wishlist: nextProps.wishlist
    });
  }

  removeWish(wishId){
    let newWishList = [];

    this.state.wishlist.forEach(wish => {
      if(wish._id !== wishId){
        newWishList.push(wish);
      }
    });

    this.setState({
      wishlist: newWishList
    });

    $.ajax({
      url: '/wish',
      type: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify({
        id: wishId
      }),
      success: function(data){
        console.log('success deletion', data);
      },
      error: function(err){
        console.log('deletion error', err);
      }
    });
  }

  markAsBought(wishId,name,message){
    let newWishList = [];

    this.state.wishlist.forEach(wish => {
      if(wish._id !== wishId){
        newWishList.push(wish);
      }
    });

    this.setState({
      wishlist: newWishList
    });

    $.ajax({
      url: '/buy',
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({
        id: wishId,
        buyername: name,
        message: message
      }),
      success: function(data){
        console.log('success bought', data);
      },
      error: function(err){
        console.log('buying error', err);
      }
    });

  }

  render(){
    let items = [];

    if(this.props.isLoggedIn){
      items = this.state.wishlist.map((item, ind) => {
        return (
          <Item
          buyername={item.buyername}
          message={item.message}
          itemname={item.wishname}
          category={item.category}
          description={item.description}
          url={item.link}
          id={item._id}
          key={ind}
          removeWish={this.removeWish}
          markAsBought={this.markAsBought}
          isLoggedIn={this.props.isLoggedIn}
          isPurchased={item.purchased} />
        )
      });
    } else {
      this.state.wishlist.forEach((item, ind) => {
        if(!item.purchased){
          items.push(
            <Item
            itemname={item.wishname}
            category={item.category}
            description={item.description}
            url={item.link}
            id={item._id}
            key={ind}
            removeWish={this.removeWish}
            markAsBought={this.markAsBought}
            isLoggedIn={this.props.isLoggedIn}
            isPurchased={item.purchased} />
          );
        }
      });
    }


    return(
      <div>
        Wishlist Below:
        <div className='row'>
          {items}
        </div>
      </div>
    )
  }
}

export default Wishlist;

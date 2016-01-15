import React from 'react';
import Item from './Item.js';
import $ from 'jquery';

class Wishlist extends React.Component {
  constructor(){
    super()
    this.removeWish = this.removeWish.bind(this);
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
    console.log(wishId);
    let newWishList = [];

    this.state.wishlist.forEach(wish => {
      if(wish._id !== wishId){
        newWishList.push(wish);
      }
      console.log("list in loop:", newWishList);
    })

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

  render(){
    let items = this.state.wishlist.map((item, ind) => {
      return (
        <Item
          itemname={item.wishname}
          category={item.category}
          message={item.description}
          url={item.link}
          id={item._id}
          key={ind}
          removeWish={this.removeWish}
          isLoggedIn={this.props.isLoggedIn} />
      )
    });

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

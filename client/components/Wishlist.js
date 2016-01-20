import React from 'react';
import Item from './Item.js';
import $ from 'jquery';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class Wishlist extends React.Component {
  constructor(){
    super()
    this.removeWish = this.removeWish.bind(this);
    this.markAsBought = this.markAsBought.bind(this);
    this.showPurchased = this.showPurchased.bind(this);
    this.showUnpurchased = this.showUnpurchased.bind(this);
    this.showAll = this.showAll.bind(this);
    this.state = {
      wishlist: [],
      show: 'All'
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      wishlist: nextProps.wishlist
    });
  }

  removeWish(wishId){
    let self =  this;

    $.ajax({
      url: '/wish',
      type: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify({
        id: wishId
      }),
      success: function(data){
        self.props.updateWishlist('delete', wishId);
      },
      error: function(err){
        console.log('deletion error', err);
      }
    });

  }

  markAsBought(wishId,name,message){
    let newWishList = [];

    this.state.wishlist.forEach(wish => {
      if (wish._id !== wishId) {
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
      },
      error: function(err){
        console.log('buying error', err);
      }
    });

  }

  showPurchased(e){
    e.preventDefault();
    this.setState({show:'Purchased'});
  }

  showUnpurchased(e){
    e.preventDefault();
    this.setState({show:'Not Purchased'});
  }

  showAll(e){
    e.preventDefault();
    this.setState({show:'All'});
  }

  render(){
    let items = [];
    let title;

    let dropdown = this.props.isLoggedIn?(
      <DropdownButton title={this.state.show}>
        <MenuItem onClick={this.showAll}>All</MenuItem>
        <MenuItem onClick={this.showPurchased}>Purchased</MenuItem>
        <MenuItem onClick={this.showUnpurchased}>Not Purchased</MenuItem>
      </DropdownButton>
      ):null;

    if (this.props.isLoggedIn) {
      if (this.state.show==='All') {
        items = this.state.wishlist;
      }
      else if (this.state.show==='Purchased') {
        items = this.state.wishlist.filter(function(item){
          return (item.purchased)
        });
      }
      else if (this.state.show==='Not Purchased') {
        items = this.state.wishlist.filter(function(item){
          return (!item.purchased);
        });
      }
      items = items.map((item, ind) => {
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

      this.props.isLoggedIn ? title = (<h3>Wishlist</h3>) : null;
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
            isPurchased={item.purchased}
            giftIcon={this.props.giftIcon} />
          );
        }
      });
    }

    return(
      <div className="wishlist">
        {title}
        <div className="filter">
        {dropdown}
        </div>
        <div className="row">
          {items}
        </div>
      </div>
    )
  }
}

export default Wishlist;

import React from 'react';
import $ from 'jquery';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import PurchaseConfirmation from './PurchaseConfirmation.js';

class Item extends React.Component {
  constructor(){
    super()
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBought = this.handleBought.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      showModal: false
    }
  }

  close(){
    this.setState({
      showModal: false
    })
  }

  open(){
    this.setState({
      showModal: true
    });
  }

  handleRemove(){
    let wishId = this.props.id;
    this.props.removeWish(wishId);
  }

  handleBought(){
    let wishId = this.props.id;
    let name = $('#name'+wishId).val();
    let message = $('#message'+wishId).val();

    this.props.markAsBought(wishId,name,message);

    $('#name'+wishId).val('');
    $('#message'+wishId).val('');
  }

  render(){
    let changeButton;
    let thumbnailInstance;
    let isPurchased = this.props.isPurchased ? (
      <div>
        <h5>Message:</h5>
        <p>{this.props.message} -{this.props.buyername}</p>
      </div>) : null;
    let source = {
      'Books': '../assets/books.png',
      'Clothing': '../assets/clothing.png',
      'Electronics': '../assets/electronics.png',
      'Handmade': '../assets/handmade.png',
      'Health': '../assets/health.png',
      'Home': '../assets/home.png',
      'Money': '../assets/money.png',
      'Outdoor': '../assets/outdoor.png',
      'Toys': '../assets/toys.png',
      'Videos/Games': '../assets/videosgames.png'
    };

    if (this.props.isLoggedIn) {
      thumbnailInstance = (
        <div>
          <div className='item col-sm-10 col-md-5 col-md-push-1'>
            <button type='button' className='btn btn-info' onClick={this.handleRemove}><span className='glyphicon glyphicon-remove'></span></button>
            <img src={source[this.props.category]} />
            <div className="single-item-description">
              <h4>{this.props.itemname}</h4>
              <h5>Description:</h5>
              <p>{this.props.description}</p>
              {isPurchased}
              <a href={this.props.url}>{this.props.url}</a>
            </div>
          </div>
        </div>
      )
    } else {
      thumbnailInstance = (
        <div className='col-sm-10 col-md-5 col-md-push-1'>
          <div className='item item-purchase'>
          <img src={source[this.props.category]} />
            <div className='single-item-description'>
              <h4>{this.props.itemname}</h4>
              <p>{this.props.description}</p>
            </div>
            <div>
              <button type='button' className='btn btn-info purchase' onClick={this.open}>Click here for details</button>
              <PurchaseConfirmation
                showModal={this.state.showModal}
                close={this.close}
                giftIcon={this.props.giftIcon}
                itemname={this.props.itemname}
                description={this.props.description}
                url={this.props.url}
                id={this.props.id}
                handleBought={this.handleBought}/>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        {thumbnailInstance}
      </div>
    )
  }
}

export default Item;

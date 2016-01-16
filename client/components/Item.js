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
    console.log('wishId',wishId);
    let name = $('#name'+wishId).val();
    let message = $('#message'+wishId).val();
    console.log(name, message);

    this.props.markAsBought(wishId,name,message);

    $('#name'+wishId).val('');
    $('#message'+wishId).val('');
  }

  render(){
    let changeButton;
    let thumbnailInstance;
    let isPurchased = this.props.isPurchased ? (
      <div>
        <p>Purchased by:{this.props.buyername}</p>
        <p>Message:{this.props.message}</p>
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
        <Col xs={6} md={4}>
          <Thumbnail className='item'>
            <h2>{this.props.itemname}</h2>
            <img className='categoryImgProfile' src={source[this.props.category]} />
            <p>{this.props.category}</p>
            {isPurchased}
            <p>{this.props.description}</p>
            <a href={this.props.url}>{this.props.url}</a>
            <button type='button' className='btn btn-info' onClick={this.handleRemove}><span className='glyphicon glyphicon-remove'></span>Remove Item</button>
          </Thumbnail>
        </Col>
      )
    } else {
      thumbnailInstance = (
        <Col xs={6} md={4}>
          <Thumbnail className='item'>
            <h2>{this.props.itemname}</h2>
            <img className='categoryImgPublic' src={source[this.props.category]} />
            <p>{this.props.category}</p>
            <p>{this.props.description}</p>
            <a href={this.props.url}>{this.props.url}</a>
            <div>
              <button type='button' className='btn btn-info' onClick={this.open}>Purchase Item</button>
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
          </Thumbnail>
        </Col>
      )
    }

    console.log("icons in items", this.props.giftIcon)

    return (
      <div>
        {thumbnailInstance}
      </div>
    )
  }
}

export default Item;

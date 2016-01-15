import React from 'react';
import $ from 'jquery';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';

class Item extends React.Component {
  constructor(){
    super()
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBought = this.handleBought.bind(this);
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
  }

  render(){
    let changeButton;
    let thumbnailInstance;
    let isPurchased = this.props.isPurchased.toString();

    if (this.props.isLoggedIn) {
      thumbnailInstance = (
        <Col xs={6} md={4}>
          <Thumbnail src="../assets/macbook_icon.png" alt="242x200">
            <h3>{this.props.itemname}</h3>
            <p>{this.props.category}</p>
            <p>Bought: {isPurchased}</p>
            <p>Purchased by:{this.props.buyername}</p>
            <p>Message:{this.props.message}</p>
            <a href={this.props.url}>{this.props.url}</a>
            <button type='button' className='btn btn-info' onClick={this.handleRemove}>Remove Item</button>
          </Thumbnail>
        </Col>
      )
    } else {
      thumbnailInstance = (
        <Col xs={6} md={4}>
          <Thumbnail src="../assets/macbook_icon.png" alt="242x200">
            <h3>{this.props.itemname}</h3>
            <p>{this.props.category}</p>
            <p>{this.props.message}</p>
            <a href={this.props.url}>{this.props.url}</a>
            <div>
              <input type='text' placeholder='Name' id={'name'+this.props.id} />
              <input type='text' placeholder='Message' id={'message'+this.props.id} />
              <button type='button' className='btn btn-info' onClick={this.handleBought}>Purchase Item</button>
            </div>
          </Thumbnail>
        </Col>
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

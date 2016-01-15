import React from 'react';
import $ from 'jquery';

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
    let name = $('#name').val();
    let message = $('#message').val();
    console.log(name, message);

    this.props.markAsBought(wishId,name,message);
  }

  render(){
    let changeButton;
    let isPurchased = this.props.isPurchased.toString();

    if (this.props.isLoggedIn) {
      changeButton = (<button type='button' className='btn btn-info' onClick={this.handleRemove}>Remove Item</button>);
    } else {
      changeButton = (
        <div>
          <input type='text' placeholder='Name' id='name' />
          <input type='text' placeholder='Message' id='message' />
          <button type='button' className='btn btn-info' onClick={this.handleBought}>Purchase Item</button>
        </div>
      )
    }


    return (
      <div className='col-md-4'>
        <h3>{this.props.itemname}</h3>
        <p>{this.props.category}</p>
        <p>{this.props.message}</p>
        <p>{isPurchased}</p>
        <a href={this.props.url}>{this.props.url}</a>
        {changeButton}
      </div>
    )
  }
}

export default Item;

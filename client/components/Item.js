import React from 'react';

class Item extends React.Component {
  constructor(){
    super()
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(){
    let wishId = this.props.id;

    this.props.removeWish(wishId);
  }

  render(){
    return (
      <div className='col-md-4'>
        <h3>{this.props.itemname}</h3>
        <p>{this.props.category}</p>
        <p>{this.props.message}</p>
        <a href={this.props.url}>{this.props.url}</a>
        <button type='button' className='btn btn-info' onClick={this.handleRemove}>Remove Item</button>
      </div>
    )
  }
}

export default Item;

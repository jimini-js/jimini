import React from 'react';

class Item extends React.Component {
  render(){
    return (
      <div className='col-md-4'>
        <h3>{this.props.itemname}</h3>
        <p>{this.props.category}</p>
        <p>{this.props.message}</p>
        <a href='{this.props.link}'>{this.props.link}</a>
      </div>
    )
  }
}

export default Item;

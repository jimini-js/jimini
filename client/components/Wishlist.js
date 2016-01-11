import React from 'react';
import Item from './Item.js';

class Wishlist extends React.Component {
  render(){
    let items = this.props.wishlist.map((item, ind) => {
      return (
        <Item
          itemname={item.itemname}
          category={item.category}
          message={item.message}
          link={item.link}
          key={ind} />
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

import React from 'react';
import Item from './Item.js';

class Wishlist extends React.Component {
  constructor(){
    super()
    this.state = {
      wishlist: []
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextprops", nextProps);
    this.setState({
      wishlist: nextProps.wishlist
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

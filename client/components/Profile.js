import React from 'react';
import Wishlist from './Wishlist.js';
import ItemForm from './ItemForm.js';

class Profile extends React.Component {
  constructor(){
    super();
    this.updateWishlist = this.updateWishlist.bind(this);
    this.state = {
      username: 'Carl',
      wishlist: [
        {
          itemname: "Ferrari",
          category: "Big Purchase",
          message: "I will drive this around everyday, thanks!",
          link: "www.amazon.com"
        },
        {
          itemname: "Xbox One",
          category: "Electronics",
          message: "I like games. Please buy me this.",
          link: "www.newegg.com"
        }
      ]
    }
  }

  updateWishlist(){
    console.log("in updated");
    // var newWishList = this.state.wishlist.concat([item]);
    // this.setState({
    //   wishlist: newWishList
    // });
  }

  render(){
    return (
      <div>
        <h1>Logged In Profile Page | Welcome {this.state.username}</h1>
        <div className='row'>
          <ItemForm updateWishlist={this.updateWishlist}/>
        </div>
        <Wishlist wishlist={this.state.wishlist} />
      </div>
    )
  }
}

export default Profile;

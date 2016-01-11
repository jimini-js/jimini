import React from 'react';

class ItemForm extends React.Component {
  constructor(){
    super();
    this.addToWishlist = this.addToWishlist.bind(this);
  }

  addToWishlist(){
    console.log("clicked");
    console.log(this.props);

    this.props.updateWishlist();
  }

  render(){
    return (
      <div className='col-md-12'>
        <form>
          <div className='form-group'>
            <label>Item</label>
            <input type='text' className='form-control' placeholder='Item Name' value=''/>
          </div>
          <div className='form-group'>
            <label>Category</label>
            <input type='text' className='form-control' placeholder='Category' />
          </div>
          <div className='form-group'>
            <label>Message</label>
            <input type='text' className='form-control' placeholder='Message' />
          </div>
          <div className='form-group'>
            <label>Link</label>
            <input type='url' className='form-control' placeholder='Enter URL Here' />
          </div>
          <button type='submit' className='btn btn-primary' onClick={this.addToWishlist}>Submit</button>
        </form>
      </div>
    )
  }
}

export default ItemForm;

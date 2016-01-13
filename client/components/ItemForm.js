import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class ItemForm extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getItemnameRef = this.getItemnameRef.bind(this);
    this.getCategoryRef = this.getCategoryRef.bind(this);
    this.getMessageRef = this.getMessageRef.bind(this);
    this.getUrlRef = this.getUrlRef.bind(this);
    this.state = {
      itemname: '',
      category: '',
      message: '',
      url: ''
    }
  }

  getItemnameRef(ref){
    this.itemnameRef = ref;
  }

  getCategoryRef(ref){
    this.categoryRef = ref;
  }

  getMessageRef(ref){
    this.messageRef = ref;
  }

  getUrlRef(ref){
    this.urlRef = ref;
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateWishlist(this.state);
    let username = this.props.userInfo;
    let itemname = this.itemnameRef.value;
    let category = this.categoryRef.value;
    let url = this.urlRef.value;
    let message = this.messageRef.value;

    $.ajax({
      url: '/wishlist',
      type: 'POST',
      contentType: 'application/json',
      dataType:'json',
      data: JSON.stringify({
        username: username,
        wishname: itemname,
        category: category,
        link: url,
        description: message
      }),
      success: function(data){
        console.log('post to /wishlist success');
        console.log('data from server: ', data);
      },
      error: function(err){
        console.log('error posting to wishlist: ', err);
      }
    });

    this.itemnameRef.value = '';
    this.categoryRef.value = '';
    this.urlRef.value = '';
    this.messageRef.value = '';
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <form ref='form'>
          <label>Item</label>
          <input type='text' name='itemname' onChange={this.handleChange} className='form-control' placeholder='Item Name' ref={this.getItemnameRef} />
        <div className='form-group'>
          <label>Category</label>
          <input type='text' name='category' onChange={this.handleChange} className='form-control' placeholder='Category' ref={this.getCategoryRef} />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <input type='text' name='message' onChange={this.handleChange} className='form-control' placeholder='Message' ref={this.getMessageRef} />
        </div>
        <div className='form-group'>
          <label>Link</label>
          <input type='url' name='url' onChange={this.handleChange} className='form-control' placeholder='Enter URL Here' ref={this.getUrlRef} />
        </div>
        <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default ItemForm;

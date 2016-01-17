import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './Categories.js'
import $ from 'jquery';

class ItemForm extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let username = this.props.userInfo.username;
    let itemname = this.itemnameRef.value;
    let category = this.categoryRef;
    let url = this.urlRef.value;
    console.log('substring',url.substring(0,5));
    if (url.substring(0,4)!=='http'){
      url='http://'+url;
    }
    let message = this.messageRef.value;
    let self = this;

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
        self.props.updateWishlist('add', data);
        console.log('********/wishlist post:', data);
      },
      error: function(err){
        console.log('error posting to wishlist: ', err);
      }
    });

    this.itemnameRef.value = '';
    this.urlRef.value = '';
    this.messageRef.value = '';
  }

  render(){
    return (
      <div className="itemform">
        <form ref='form'>
          <div className="row">
            <div className="col-sm-10 col-md-8 itemdescription">
             <div className="form-group">
                <label>Item</label>
                  <input type='text' name='itemname' className='form-control' placeholder='Item Name' ref={this.getItemnameRef} />
              </div>
              <div className='form-group'>
                <label>Description</label>
                <textarea type='text' name='message' rows='5' className='form-control' id='description' placeholder='Description' ref={this.getMessageRef}></textarea>
              </div>
              <div className='form-group'>
                <label>URL</label>
                <input type='url' name='url' className='form-control' placeholder='URL' ref={this.getUrlRef} />
              </div>
            </div>
            <div className="col-sm-10 col-md-4">
              <label>Category</label>
              <Categories getCategoryRef={this.getCategoryRef} />
              <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ItemForm;

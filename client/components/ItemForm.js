import React from 'react';
import ReactDOM from 'react-dom';

class ItemForm extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      itemname: '',
      category: '',
      message: '',
      url: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateWishlist(this.state);
  }

  handleChange(e){
    console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <form ref='form'>
          <label>Item</label>
          <input type='text' name='itemname' onChange={this.handleChange} className='form-control' placeholder='Item Name' />
        <div className='form-group'>
          <label>Category</label>
          <input type='text' name='category' onChange={this.handleChange} className='form-control' placeholder='Category' />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <input type='text' name='message' onChange={this.handleChange} className='form-control' placeholder='Message' />
        </div>
        <div className='form-group'>
          <label>Link</label>
          <input type='url' name='url' onChange={this.handleChange} className='form-control' placeholder='Enter URL Here' />
        </div>
        <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default ItemForm;

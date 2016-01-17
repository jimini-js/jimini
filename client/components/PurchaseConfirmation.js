import React from 'react';
import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';

class PurchaseConfirmation extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.handleBought();
    this.props.close();
  }

  render(){
    console.log(this.props.giftIcon)
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.itemname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Why they want it:</h3>
          <h5>{this.props.description}</h5>
          <h3>You can purchase the item by clicking on this link:</h3>
          <h5><a href={this.props.url}>{this.props.url}</a></h5>
          <div>
            <img src={this.props.giftIcon.icon.preview_url} height='50' width='50'/>
          </div>
          <form>
          <label>Let them know who bought it:</label>
            <input type='text' placeholder='Optional' className='form-control' id={'name'+this.props.id} />
          <label>Leave them a message:</label>
            <input type='text' placeholder='Optional' className='form-control' id={'message'+this.props.id} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClick}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default PurchaseConfirmation;

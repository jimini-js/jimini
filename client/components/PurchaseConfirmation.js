import React from 'react';
import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';

class PurchaseConfirmation extends React.Component {
  constructor(){
    super();
  }

  render(){
    console.log(this.props.giftIcon)
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.props.itemname}</h4>
          <p>{this.props.description}</p>
          <p>{this.props.url}</p>
          <img src={this.props.giftIcon.icon.preview_url} height='50' width='50'/>
          <input type='text' placeholder='Name' id={'name'+this.props.id} />
          <input type='text' placeholder='Message' id={'message'+this.props.id} />
          <Button onClick={this.props.handleBought}>Purchase</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default PurchaseConfirmation;

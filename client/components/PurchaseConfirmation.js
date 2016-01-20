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
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title className='modaltitle'>
            {this.props.itemname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>
          <h3>Description</h3>
          <h5>{this.props.description}</h5>
          <hr/>
          <h3>Purchase item by clicking on link:</h3>
          <h5><a href={this.props.url}>{this.props.url}</a></h5>
          <form>
          <label>From:</label>
            <input type='text' placeholder='Name' className='form-control' id={'name'+this.props.id} />
          <label>Leave a message:</label>
            <input type='text' placeholder='Optional' className='form-control' id={'message'+this.props.id} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClick}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default PurchaseConfirmation;

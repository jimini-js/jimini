import React from 'react';
import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';

class PurchaseConfirmation extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default PurchaseConfirmation;

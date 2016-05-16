import React from 'react';
import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';

class LoginModal extends React.Component {
  constructor(){
    super();
  }

  render(){
  	return (
  		<Modal show={this.props.showModal}>
  			<Modal.Title>Someone loves you!</Modal.Title>
        <Modal.Body>
          <h3>Congratulations! A wish has been fulfilled.</h3>
        </Modal.Body>
  			<Modal.Footer>
  				<Button onClick={this.props.close}>Close</Button>
  			</Modal.Footer>
  		</Modal>
  	)
  }
}

export default LoginModal;

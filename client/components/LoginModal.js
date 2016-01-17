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
  			<Modal.Title>Somebody loves you!</Modal.Title>
  			<Modal.Footer>
  				<Button onClick={this.props.close}>Close</Button>
  			</Modal.Footer>
  		</Modal>
  	)
  }


}

export default LoginModal;
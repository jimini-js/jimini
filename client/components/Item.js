import React from 'react';
import $ from 'jquery';
// import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';

class Item extends React.Component {
  constructor(){
    super()
    this.handleRemove = this.handleRemove.bind(this);
    this.handleBought = this.handleBought.bind(this);
  }

  handleRemove(){
    let wishId = this.props.id;

    this.props.removeWish(wishId);
  }

  handleBought(){
    let wishId = this.props.id;

    this.props.markAsBought(wishId);
  }

  render(){
    let changeButton;
    let isPurchased = this.props.isPurchased.toString();

    if (this.props.isLoggedIn) {
      changeButton = (<button type='button' className='btn btn-info' onClick={this.handleRemove}>Remove Item</button>);
    } else {
      changeButton = (<button type='button' className='btn btn-info' onClick={this.handleBought}>Purchase Item</button>);
    }


  render(){
    let removeButton;

    if(this.props.isLoggedIn){
      console.log('this.props.isLoggedIn in isLoggedIn ', this.props.isLoggedIn);
      removeButton = (<button type='button' className='btn btn-info' onClick={this.handleRemove}>Remove Item</button>);
    }

    const thumbnailInstance = (
        <Col xs={6} md={4}>
          <Thumbnail src="../assets/macbook_icon.png" alt="242x200">
            {console.log('this.props in thumbnailInstance ', this.props)}
            <h3>{this.props.itemname}</h3>
            <p>{this.props.category}</p>
            <p>{this.props.message}</p>
            <a href={this.props.url}>{this.props.url}</a>
            {removeButton}
          </Thumbnail>
        </Col>
    );

    return (
      <div>
        {thumbnailInstance}
        {removeButton}
      </div>
    )
  }
}

export default Item;


/*
    return (
      <div className='col-md-4'>
        <h3>{this.props.itemname}</h3>
        <p>{this.props.category}</p>
        <p>{this.props.message}</p>
        <p>{isPurchased}</p>
        <a href={this.props.url}>{this.props.url}</a>
        {changeButton}
        {removeButton}
      </div>
    )
  }
}

export default Item;
*/


/*

    const thumbnailInstance = (
      <Grid>
        <Row>
        <Col xs={6} md={4}>
          <Thumbnail src="client/assets/macbook_icon.png" alt="242x200">
            <h3>{this.props.itemname}</h3>
            <p>{this.props.category}</p>
            <p>{this.props.message}</p>
            <a href={this.props.url}>{this.props.url}</a>
            {removeButton}
          </Thumbnail>
        </Col>
        </Row>
      </Grid>
    );

*/

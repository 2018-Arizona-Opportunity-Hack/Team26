import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo_image from './swift-logo.png';
import './CheckinPage.scss';

class CheckinPage extends Component {
  render() {
    return (
      <div className="CheckinPage">
      <Jumbotron>
          <h1 className="display-3"><img className="logo" alt="Logo" src={logo_image}/></h1>
          <h2 className="instructions">Please Sign In.</h2>
      </Jumbotron>
      <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="subscribeName" sm={1}>Name</Label>
            <Col sm={11}>
              <Input type="text" name="name" id="subscribeName" placeholder="Name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="subscribePhone" sm={1}>Phone</Label>
            <Col sm={11}>
              <Input type="number" name="phone" id="subscribePhone" placeholder="Phone" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="subscribeEmail" sm={1}>Email</Label>
            <Col sm={11}>
              <Input type="email" name="email" id="subscribeEmail" placeholder="Email" />
            </Col>
          </FormGroup>
        </Form>

        <Link to='/verifysignin'>
            <Button color="primary">Sign In</Button>
          </Link>
      </div>
    );
  }
}

export default CheckinPage;
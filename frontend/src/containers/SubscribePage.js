import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

// import './App.scss';

class SubscribePage extends Component {
  render() {

    return (
      <div className="SubscribeContainer">
        <Form>
          <FormGroup row>
            <Label for="subscribeName" sm={2}>Name</Label>
            <Col sm={10}>
              <Input type="text" name="name" id="subscribeName" placeholder="Name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="subscribePhone" sm={2}>Phone</Label>
            <Col sm={10}>
              <Input type="number" name="phone" id="subscribePhone" placeholder="Phone" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="subscribeEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="subscribeEmail" placeholder="Email" />
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SubscribePage;
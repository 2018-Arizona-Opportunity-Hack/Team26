import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

// import './App.scss';

class SubscribePage extends Component {
  render() {

    return (
      <div className="SubscribeContainer">
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
      </div>
    );
  }
}

export default SubscribePage;
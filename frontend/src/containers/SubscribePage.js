import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'

import './SubscribePage.scss';

class SubscribePage extends Component {
  constructor(props) {
    super(props);
    this.state = {user_name: "",
    user_email: "",
    user_phone: ""
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState({user_name: input});
  }
  

  handleSubmit(event) {
    alert('user name is: ' + this.state.user_name + 'user_email is: ' + this.state.user_email+ 'user_phone is: ' + this.state.user_phone);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SubscribePage">
      <div className="instructions">Please input the following information to sign up!</div>
      <br></br>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="subscribeName" sm={1}>Name</Label>
            <Col sm={11}>
              <Input type="text" name="name" id="subscribeName" placeholder="Name" name="name" value={this.state.value} onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="subscribePhone" sm={1}>Phone</Label>
            <Col sm={11}>
              <Input type="text" name="phone" id="subscribePhone" placeholder="Phone"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="subscribeEmail" sm={1}>Email</Label>
            <Col sm={11}>
              <Input type="email" name="email" id="subscribeEmail" placeholder="Email" />
            </Col>
          </FormGroup>
          <input type="submit" value="Sign Up Test" />
        </Form>
        <Link to='/verify'>
            <Button color="primary" onclick={
              axios.post('http://localhost:3000/users', {
                user_id: 3,
                user_name: 'Volunteer 3',
                user_phone: '6021234569',
                user_email: 'email@fake.com'
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
            }>Sign Up</Button>
          </Link>

      </div>
    );
  }
}

export default SubscribePage;
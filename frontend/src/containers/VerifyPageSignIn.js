import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo_image from './swift-logo.png';
import './VerifyPageSignIn.scss';

class VerifyPageSignIn extends Component {
  render() {
    return (
      <div className="VerifyPageSignIn">
      <Jumbotron>
          <h1 className="display-3"><img className="logo" alt="Logo" src={logo_image}/></h1>
          <p className="lead">Thanks! You are signed in.</p>
          <p className="lead">
          <Link to='/checkin'>
            <Button color="primary">Home</Button>
          </Link>
          </p>
      </Jumbotron>
      <div className="background-image"></div>
      </div>
    );
  }
}

export default VerifyPageSignIn;
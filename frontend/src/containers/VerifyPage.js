import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo_image from './swift-logo.png';
import './VerifyPage.scss';

class VerifyPage extends Component {
  render() {
    return (
      <div className="VerifyPage">
      <Jumbotron>
          <h1 className="display-3"><img className="logo" alt="Logo" src={logo_image}/></h1>
          <p className="lead">Congratulations! You are registered.</p>
          <p className="lead">
          <Link to='/'>
            <Button color="primary">Home</Button>
          </Link>
          </p>
      </Jumbotron>
      <div className="background-image"></div>
      </div>
    );
  }
}

export default VerifyPage;
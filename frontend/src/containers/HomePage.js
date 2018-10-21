import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import logo_image from './logo.png';
// import './App.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="HomeContainer">
      <Jumbotron>
          <h1 className="display-3">Voluntarius<img src={logo_image}/></h1>
          <p className="lead">blah blah blah</p>
          <hr className="my-2" />
          <p>Blah2222222</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
      </Jumbotron>
      </div>
    );
  }
}

export default HomePage;
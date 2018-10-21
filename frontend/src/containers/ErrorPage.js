import React, { Component } from 'react';
import { Alert, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import './ErrorPage.scss';

class ErrorPage extends Component {
  render() {
    return (
      <div className="ErrorPage">
        <div className="background-image">
          <Alert color="danger">
            <h1 className="error-msg">Page Does Not Exist</h1>
          </Alert>
          <Link to='/'>
            <Button color="primary">Home</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
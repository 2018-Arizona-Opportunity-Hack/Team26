import React, { Component } from 'react';
import AppRoutes from './routes/appRoutes';
import { Button } from 'reactstrap';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="danger">Danger!</Button>
        <AppRoutes />
      </div>
    );
  }
}

export default App;

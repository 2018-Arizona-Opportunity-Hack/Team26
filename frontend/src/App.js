import React, { Component } from 'react';
import AppRoutes from './routes/appRoutes';
import { Button } from 'reactstrap';
import './App.scss';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AppRoutes from './routes/appRoutes';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRoutes />
      </div>
    );
  }
}

export default App;
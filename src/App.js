import React, { Component } from 'react';
import './App.css';
import Books from './components/Books'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Books/>
      </div>
    );
  }
}

export default App;
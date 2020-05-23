import React, { Component } from 'react';
import './App.css';
import Books from './components/Books'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
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
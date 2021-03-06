import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Form />
      </div>
    )
  }
}

export default App;
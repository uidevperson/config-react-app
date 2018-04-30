import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
      persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    )
  }
}

export default App;

import React, { Component } from 'react';

import { CardList } from './Components/card-list/card-list-component';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // set/changes the state of the above monsters array with data from API
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }


  // This renders our components to the screen 
  render() {
    return (
      <div className="App">
        <input type="search" placeholder='search here' onChange={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;

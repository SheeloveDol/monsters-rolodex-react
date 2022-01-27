import React, { Component } from 'react';

import { CardList } from './Components/card-list/card-list-component'; 

import { SearchBox } from './Components/search-box/search-box.component';


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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );


    return (
      <div className="App">
        <SearchBox 
          placeholder='search them'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

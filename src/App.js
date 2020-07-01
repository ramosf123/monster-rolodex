import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBar } from './components/search-bar/search-bar.component'


class App extends Component {

  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {

    const { monsters, searchField } = this.state
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBar 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList 
          monsters={ filterdMonsters }
        />
      </div>
    );
  }
}

export default App;

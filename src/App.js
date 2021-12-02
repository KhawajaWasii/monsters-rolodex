// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import CardList from "./component/card-list/card-list";
import { SearchBox } from "./component/Search-Box/Search-Box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const monsterFiltered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <div>
          <h1>Monsters ROLODUX</h1>
        </div>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={monsterFiltered} />
      </div>
    );
  }
}

export default App;

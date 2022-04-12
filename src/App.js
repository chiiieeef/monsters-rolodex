import { Component } from "react";
import React from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";


// Functional App Component
/*
const App = () => {
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="search monsters"></SearchBox>
  <CardList monsters={filteredMonsters}/>
      </div>
  )
}
*/

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
    console.log("componentDidMount");
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="search monsters"></SearchBox>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}


export default App;

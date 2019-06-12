import React, { Component } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Sharvy!</h1>
        </header>
        <ListContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Currency from "./components/Currency";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">Cryptocurrency Tracker</h1>
          <Currency />
        </header>
      </div>
    );
  }
}

export default App;

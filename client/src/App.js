import React, { Component } from "react";
import Header from "./components/Navbar";
import Currency from "./components/Currency";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Currency />
        </header>
      </div>
    );
  }
}

export default App;

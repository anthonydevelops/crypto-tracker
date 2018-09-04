import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import Header from "./components/Navbar";
import Currency from "./components/Currency";
import News from "./components/News";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Jumbotron className="jumbo">
            <Currency />
            <News />
          </Jumbotron>
        </header>
      </div>
    );
  }
}

export default App;

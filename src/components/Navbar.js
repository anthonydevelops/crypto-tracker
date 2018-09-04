import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../App.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <NavbarBrand href="/" className="float-center head">
            CryptoTracker
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

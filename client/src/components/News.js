import React, { Component } from "react";
import {
  ListGroup
  // ListGroupItem,
  // ListGroupItemHeading,
  // ListGroupItemText
} from "reactstrap";
import "../App.css";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result.Data
        });
        console.log(this.state.data);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <ListGroup>
        {Object.entries(data).forEach(key => {
          console.log(key[1]);
        })}
      </ListGroup>
    );
  }
}

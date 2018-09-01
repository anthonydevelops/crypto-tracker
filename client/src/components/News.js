import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import "../App.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  componentDidMount() {
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result.Data
        });
      });
  }

  render() {
    const { data } = this.state;
    return <ListGroup>{Object.keys(data).map({})}</ListGroup>;
  }
}

import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";
import "../App.css";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // Call api to retrieve news articles
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

    // Reduce the size of the returned news feed
    while (data.length > 10) {
      data.pop();
    }

    return (
      <h1>
        {data.map(article => {
          return (
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>{article.title}</ListGroupItemHeading>
                <ListGroupItemText>{article.body}</ListGroupItemText>
                <Button color="info" href={article.url}>
                  Read More
                </Button>
              </ListGroupItem>
            </ListGroup>
          );
        })}
      </h1>
    );
  }
}

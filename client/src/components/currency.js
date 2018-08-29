import React, { Component } from "react";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    };
  }

  componentDidMount() {
    fetch("https://min-api.cryptocompare.com/data/all/coinlist")
      .then(res => res.json())
      .then(
        result => {
          console.log(result.Data);
          this.setState({
            isLoaded: true,
            data: result.Data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {Object.entries(data).forEach(([key, value]) => (
            <li>{`${key}: ${value}`}</li>
          ))}
        </ul>
      );
    }
  }
}

export default Currency;

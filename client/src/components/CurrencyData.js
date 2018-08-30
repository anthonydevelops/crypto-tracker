import React, { Component } from "react";

class CurrencyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      cap: "",
      price: "",
      change: ""
    };
  }

  componentDidMount() {
    const { data } = this.state;
    fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data}&tsyms=USD`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          cap: res.DISPLAY[data].USD.MKTCAP,
          price: res.DISPLAY[data].USD.PRICE,
          change: res.DISPLAY[data].USD.CHANGE24HOUR
        });
      });
  }

  render() {
    const { cap, price, change } = this.state;
    return (
      <React.Fragment>
        <th>{cap}</th>
        <th>{price}</th>
        <th>{change}</th>
      </React.Fragment>
    );
  }
}

export default CurrencyData;

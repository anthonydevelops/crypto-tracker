import React, { Component } from "react";
import { Table, Media } from "reactstrap";
import "../App.css";
import CurrencyData from "./CurrencyData";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      "https://min-api.cryptocompare.com/data/top/totalvol?limit=10&tsym=USD"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result.Data
        });
      });
  }

  render() {
    // Return the data, which is held as {[ {}, {}, ... ]}
    const { data } = this.state;
    return (
      <div>
        <h3 className="title">Cryptocurrency Prices</h3>
        <Table hover size="sm" className="table">
          <thead>
            <tr>
              <th>Coin Name (Code)</th>
              <th>Market Cap (USD)</th>
              <th>Price (USD)</th>
              <th>24h Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return (
                <tr key={item.CoinInfo.Name.toString()}>
                  <th>
                    <Media>
                      <Media href="#">
                        <Media
                          object
                          className="cur-img"
                          src={
                            "https://www.cryptocompare.com" +
                            item.CoinInfo.ImageUrl
                          }
                          alt={item.CoinInfo.FullName}
                        />
                      </Media>
                      <Media body>
                        <Media heading className="cur-header">
                          {item.CoinInfo.FullName} ({item.CoinInfo.Name})
                        </Media>
                      </Media>
                    </Media>
                  </th>
                  <CurrencyData data={item.CoinInfo.Name} />
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Currency;

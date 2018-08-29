import React, { Component } from "react";
import { Table, Media } from "reactstrap";
import "../App.css";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      "https://min-api.cryptocompare.com/data/top/totalvol?limit=20&tsym=USD"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result.Data
        });
      });
  }

  render() {
    const { data } = this.state;
    // Return the data, which is held as {[ {}, {}, ... ]}
    return (
      <Table hover>
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
              <tr>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Currency;

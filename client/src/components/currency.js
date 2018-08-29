import React, { Component } from "react";
import { Table, Media } from "reactstrap";

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
    fetch(
      "https://min-api.cryptocompare.com/data/top/totalvol?limit=20&tsym=USD"
    )
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
                      <Media left href="#">
                        <Media
                          object
                          sm
                          src={
                            "https://www.cryptocompare.com" +
                            item.CoinInfo.ImageUrl
                          }
                          alt={item.CoinInfo.FullName}
                        />
                      </Media>
                      <Media body>
                        <Media heading>
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
}

export default Currency;

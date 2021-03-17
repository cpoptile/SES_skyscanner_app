import { Component } from "react";

class Currencies extends Component {
    state = {
        currencies: [],
        selectedCurrency: "",
        validationError: ""
    };

    componentDidMount() {
        fetch(
            "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                }
            }
        )
          .then(response => {
            return response.json();
          })
          .then(data => {
              console.log(data)
            let teamsFromApi = data.Currencies.map(currency => {
                console.log(currency.Code)
              return { value: currency.Code, display: currency.Symbol + " - " + currency.Code };
            });
            this.setState({
              currencies: [
                {
                  value: "USD",
                  display:
                    "$ - USD"
                }
              ].concat(teamsFromApi)
            });
          })
          .catch(error => {
            console.log(error);
          });
        }

        render() {
            return (
              <div>
                <select
                  value={this.state.selectedCurrency}
                  onChange={e =>
                    this.setState({
                      selectedCurrency: e.target.value,
                      validationError:
                        e.target.value === ""
                          ? "You must select your favourite team"
                          : ""
                    })
                  }
                >
                  {this.state.currencies.map(currency => (
                    <option
                      key={currency.value}
                      value={currency.value}
                    >
                      {currency.display}
                    </option>
                  ))}
                </select>
                <div
                  style={{
                    color: "red",
                    marginTop: "5px"
                  }}
                >
                  {this.state.validationError}
                </div>
              </div>
            );
          }

}

export default Currencies;
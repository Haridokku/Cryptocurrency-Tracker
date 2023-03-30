import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <div className="currency-list">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-container">
            <h1 className="head">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="main-img"
            />
            <div className="title-container">
              <h1 className="heading">Coin Type</h1>
              <div className="heading-container">
                <h1 className="heading">USD</h1>
                <h1 className="heading">EURO</h1>
              </div>
            </div>
            <ul className="list-container">
              {cryptoList.map(each => (
                <CryptocurrencyItem key={each.id} eachDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList

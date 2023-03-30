import './index.css'

const CryptocurrencyItem = props => {
  const {eachDetails} = props
  const {usdValue, euroValue, currencyName, currencyLogo} = eachDetails
  return (
    <li className="list-item">
      <div className="item-container">
        <div className="img-container">
          <img src={currencyLogo} alt={currencyName} className="logo" />
          <p className="para">{currencyName}</p>
        </div>
        <div className="text-container">
          <p className="para">{usdValue}</p>
          <p className="para">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

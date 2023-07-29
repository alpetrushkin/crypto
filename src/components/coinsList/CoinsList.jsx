import styles from './CoinsList.module.css'
import { useContext } from 'react'
import { CoinsContext } from '../../context/coinsContext.jsx'

const CoinsList = () => {
  const coinsContext = useContext(CoinsContext)
  const {filteredCoins} = coinsContext

  return (
    <ul className={styles.coinsList}>
      {filteredCoins.map(coin => {
        return (
          <li className={styles.coinItem} key={coin.uuid}>
            <div className={styles.coinItemInfo}>
              <img className={styles.coinItemLogo} src={coin.iconUrl} alt={coin.name} />
              <p style={{color: coin.color}}>
                {coin.name}/USD
              </p>
            </div>
            <div className={styles.coinItemPrice}>
              <p style={{color: coin.color}}>
                {(+coin.price).toFixed(2)} USD
              </p>
              <p style={{color: coin.color}}>
                {(+coin.btcPrice).toFixed(2)} BTC
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default CoinsList
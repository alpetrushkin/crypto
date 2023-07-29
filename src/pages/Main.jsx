import styles from './Main.module.css'
import Card from '../components/card/Card.jsx'
import CoinsList from '../components/coinsList/CoinsList.jsx'
import FilterBlock from '../components/filterBlock/FilterBlock.jsx'

const Main = ({ coins, balance, setBalance, setCoins }) => {

  return (
    <main className={styles.main}>
      <Card
        balance={balance}
        setBalance={setBalance}
      />
      <FilterBlock
        setCoins={setCoins}
      />
      {coins.length > 0
        ? <CoinsList />
        : <div>Loading...</div>
      }
    </main>
  )
}

export default Main
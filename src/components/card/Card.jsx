import styles from './Card.module.css'
import { WithRuBalance } from '../../helpers/hoc/withRuBalance.jsx'

const Card = ({balance, setBalance, ruBalance}) => {
  console.log({ ruBalance })
  return (
    <div className={styles.card}>
      <div className={styles.cardBlock}>
        <p>CRYPTO-FINANCE</p>
        <button
          onClick={setBalance}
          onMouseEnter={() => console.log('enter >>>')}
        >
          Add money
        </button>
      </div>

      <div className={styles.cardBlock}>
        <p>ALEXANDER</p>
        <p>{balance} $</p>
      </div>
    </div>
  )
}

export default WithRuBalance(Card)
import styles from './FilterBlock.module.css'
import React, { useContext } from 'react'
import { CoinsContext } from '../../context/coinsContext.jsx'
import { UseFilterCoins } from "../../helpers/hooks/useFilterCoins"

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext)
  const {coins} = coinsContext

  const {value, setValue} = UseFilterCoins(setCoins, coins)

  return (
    <div className={styles.filterBlock}>
      <input
        className={styles.input}
        type='text'
        placeholder='bitcoin'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}

export default React.memo(FilterBlock)
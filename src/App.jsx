import Header from './components/header/Header.jsx'
import Main from './pages/Main.jsx'
import { useCallback, useEffect, useState } from 'react'
import { getCoins } from './api/api.js'
import { CoinsContext } from './context/coinsContext'

function App() {
  const [balance, setBalance] = useState(60000)
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins()
      setCoins(data.coins)
      setFilteredCoins(data.coins)
    }
    fetchData()
  }, [])

  const addBalance = useCallback(() => {
    setBalance((prev) => prev + 1000)
  }, [])

  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header />
        <Main
          coins={coins}
          balance={balance}
          setCoins={setFilteredCoins}
          setBalance={addBalance}
          filteredCoins={filteredCoins}
        />
      </CoinsContext.Provider>
    </>
  )
}

export default App

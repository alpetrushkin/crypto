import React, { useEffect, useState } from 'react'

export const UseFilterCoins = (setCoins, coins) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const filteredCoins = coins.filter((coins) => {
      return coins.name.toLowerCase().includes(value.toLowerCase())
    })
    setCoins(filteredCoins)
  }, [value])
  return { setValue, value }
}

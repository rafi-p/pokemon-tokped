import React, { createContext, useEffect, useState } from 'react'
import {LocalStorage} from '../helpers'

export const PokemonContext = createContext()

const PokemonContextProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState({
    catchedPokemon: LocalStorage.getMyPokemon() ? LocalStorage.getMyPokemon() : [],
  })

  const catchPokemon = () => {
    const value = Math.floor(Math.random() * 100) > 50
    return new Promise(async function (resolve, reject) {
      value ? resolve(true) : resolve(false)
    })
  }

  const savePokemon = (el) => {
    return new Promise(async function (resolve, reject) {
      myPokemon.catchedPokemon.filter((x) => x.nickname.toLowerCase() === el.nickname.toLowerCase()).length === 0
        ? resolve(true)
        : resolve(false)
    })
  }

  const releasePokemon = (nickname) => {
    setMyPokemon((prevState) => ({
      catchedPokemon: myPokemon.catchedPokemon.filter((x) => x.nickname !== nickname),
    }))
  }

  useEffect(() => {
    LocalStorage.setMyPokemon(myPokemon.catchedPokemon)
  }, [myPokemon])

  return (
    <PokemonContext.Provider
      value={{
        myPokemon,
        setMyPokemon,
        catchPokemon,
        savePokemon,
        releasePokemon
      }}
      >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextProvider

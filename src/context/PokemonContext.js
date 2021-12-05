import React, { createContext, useEffect, useState } from 'react'
import {LocalStorage} from '../helpers'

export const PokemonContext = createContext()

const PokemonContextProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState({
    catchedPokemon: LocalStorage.getMyPokemon() ? LocalStorage.getMyPokemon() : [],
  })

  return (
    <PokemonContext.Provider
      value={{
        myPokemon,
        setMyPokemon
      }}
      >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextProvider

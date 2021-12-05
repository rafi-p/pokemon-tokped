import React, { useState, useEffect, useContext } from 'react';
import {
  Card,
  Text
} from '../../components/index'
import {
  Images,
  FontStyles,
  Colors
} from '../../constant/index'
import {
  Container,
  Nothing
} from './style';
import {PokemonContext} from '../../context/PokemonContext'
import { convert, LocalStorage } from '../../helpers/index';

const NotFound = props => {
  const pokemonContext = useContext(PokemonContext)
  const [dataMain, setDataMain] = useState([])

  useEffect(() => {
    setDataMain(pokemonContext.myPokemon.catchedPokemon)
  }, [pokemonContext.myPokemon])

  return (
    <Container>
      <div className="content-wrapper">
        {
          dataMain.length === 0 &&
          <Nothing>
            <div className="image-wrapper">
              <img src={Images.notFound} alt="" />
            </div>
            <Text
              styling={
                FontStyles.heading3
              }
              text={`NOT FOUND`}
              color={ Colors.black.default }
            />
          </Nothing>
        }
      </div>
    </Container>
  );

};

export default NotFound;

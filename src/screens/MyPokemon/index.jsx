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

const MyPokemon = props => {
  const pokemonContext = useContext(PokemonContext)
  const [dataMain, setDataMain] = useState([])

  useEffect(() => {
    setDataMain(pokemonContext.myPokemon.catchedPokemon)
  }, [pokemonContext.myPokemon])

  return (
    <Container>
      <div className="content-wrapper">
        {
          dataMain && dataMain.map((el, i) => {
            return (
              <Card
                key={el.id}
                name={el.name.toUpperCase()}
                image={el.image}
                nickname={el.nickname}
                myPokemon={true}
              />
            )
          })
        }
        {
          dataMain.length === 0 &&
          <Nothing>
            <div className="image-wrapper">
              <img src={Images.pokeball} alt="" />
            </div>
            <Text
              styling={
                FontStyles.heading3
              }
              text={`Go catch some pokemon!`}
              color={ Colors.black.default }
            />
          </Nothing>
        }

      </div>
    </Container>
  );

};

export default MyPokemon;

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import { Text } from '../../components/index';
import {PokemonContext} from '../../context/PokemonContext'
import {
  CardWrapper
} from './style';


const CardComponent = props => {
  const history = useHistory()
  const pokemonContext = useContext(PokemonContext)

  const ownedPokemon = () => {
      return pokemonContext.myPokemon.catchedPokemon.filter(el => el.name.toLowerCase() === props.name.toLowerCase()).length

  }

  const handleRelease = () => {
    pokemonContext.releasePokemon(props.nickname)
  }

  return (
    <CardWrapper
      onClick={() => {history.push(`/detail/${props.name.toLowerCase()}`)}}
      isMyPokemon={props.myPokemon }
    >
      <Text
        styling={
          FontStyles.heading2
        }
        text={props.name}
        color={ Colors.black.default }
        className='customText'
      />
      {
        props.myPokemon &&
        <Text
          styling={
            FontStyles.mediumM
          }
          text={props.nickname}
          color={ Colors.black.default }
          className='customText'
        />
      }
      <div className="container-img">
        <img src={props.image} alt="" />
      </div>
        <Text
          styling={
            FontStyles.mediumL
          }
          text={`Owned: ${
            ownedPokemon()
          }`}
          color={ Colors.black.default }
        />
      {
        props.myPokemon &&
          <div
            className="container-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleRelease()
            }}
          >
            <Text
              styling={
                FontStyles.mediumS
              }
              text='Release'
              color={ Colors.white.default }
            />
          </div>
      }

    </CardWrapper>
  );
};

export default CardComponent;

import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import { Text } from '../../components/index';
import {
  CardWrapper
} from './style';


const CardComponent = props => {
  const history = useHistory()

  return (
    <CardWrapper
      onClick={() => {history.push('/detail')}}
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
        <img src={Images.pokemonLogo} alt="" />
      </div>
      {
        !props.myPokemon &&
        <Text
          styling={
            FontStyles.mediumL
          }
          text={`Owned: ${props.counted}`}
          color={ Colors.black.default }
        />
      }
      {
        props.myPokemon &&
          <div
            className="container-btn"
            onClick={(e) => {
              e.stopPropagation();
              // alert('click release')
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

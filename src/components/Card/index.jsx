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
    >
      <Text
        styling={
          FontStyles.heading2
        }
        text='Bullbasaur'
        color={ Colors.black.default }
        className='customText'
      />
      <div className="container-img">
        <img src={Images.pokemonLogo} alt="" />
      </div>
      <Text
        styling={
          FontStyles.mediumL
        }
        text={'Counted: 0'}
        color={ Colors.black.default }
      />
    </CardWrapper>
  );
};

export default CardComponent;

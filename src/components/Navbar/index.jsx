import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import { Text } from '../../components/index';
import {
  Navbar
} from './style';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

const NavbarComponent = props => {
  const history = useHistory()

  return (
    <Navbar>
      <div
        className='logo-container'
        onClick={() => {history.push('/')}}
      >
        <img src={Images.pokemonLogo} alt="" />
      </div>
      <div className="container-btn">
        <Text
          styling={
            isMobile
            ?
            FontStyles.mediumS
            :
            FontStyles.mediumL
          }
          text='My Pokemon'
          color={ Colors.white.default }
        />
      </div>
    </Navbar>
  );
};

export default NavbarComponent;

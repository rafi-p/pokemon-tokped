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
  const { pathname } = useLocation();

  const isActive = (path) => {
    if(path === pathname) {
      return true
    }
  }

  return (
    <Navbar>
      <div
        className='logo-container'
        onClick={() => {history.push('/')}}
      >
        <img src={Images.pokemonLogo} alt="" />
      </div>
      <div
        className={`container-btn ${isActive('/my-pokemon') ? 'active' : ''}`}
        onClick={() => {history.push('/my-pokemon')}}
      >
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

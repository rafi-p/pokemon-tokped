import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import { useHistory, useLocation } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import {
} from '../index';


const NavbarComponent = props => {
  const history = useHistory()

  return (
    <div
      className={'container'}
    >
      navbar
    </div>
  );
};

export default NavbarComponent;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import {

} from '../../components/index'
import {
  Images
} from '../../constant/index'
import { convert } from '../../helpers/index';
import * as pokemonListAction from '../../store/pokemonList/actions';

const Dashboard = props => {
  const dispatch = useDispatch();
  return (
    <div className='container-dashboard'>
      dashboard
    </div>
  );

};

export default Dashboard;

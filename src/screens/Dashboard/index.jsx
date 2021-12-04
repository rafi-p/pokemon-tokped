import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card
} from '../../components/index'
import {
  Images
} from '../../constant/index'
import {
  Container
} from './style';
import { convert } from '../../helpers/index';
import * as pokemonListAction from '../../store/pokemonList/actions';

const Dashboard = props => {
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="content-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      <div className="pagination">
        <img
          src={ Images.arrowPageLeft }
          alt=''
          className={ `clicked` }
          onClick={ () => { } }
        />
        <div>
          1
        </div>
        <img
          src={ Images.arrowPageRight }
          alt=''
          className={ `clicked` }
          onClick={ () => { } }
        />
      </div>
    </Container>
  );

};

export default Dashboard;

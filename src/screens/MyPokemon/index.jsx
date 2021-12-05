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
  const [dataMain, setDataMain] = useState(
    [
      {
        name: 'IVYSAUR',
        counted: 0,
        nickname: 'tes'
      },
      {
        name: 'Lalalal',
        counted: 0,
        nickname: 'dsadsad'
      },
      {
        name: 'dsadsad',
        counted: 0,
        nickname: 'dsadsads'
      }
    ]
  )
  return (
    <Container>
      <div className="content-wrapper">
        {
          dataMain && dataMain.map((el, i) => {
            return (
              <Card
                key={i}
                name={el.name}
                counted={el.counted}
                nickname={el.nickname}
                myPokemon={true}
              />
            )
          })
        }

      </div>
    </Container>
  );

};

export default Dashboard;

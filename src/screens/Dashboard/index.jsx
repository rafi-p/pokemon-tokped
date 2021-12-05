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
        counted: 0
      },
      {
        name: 'Lalalal',
        counted: 0
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
              />
            )
          })
        }

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

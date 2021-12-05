import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
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
import { GET_POKEMONS_LIST } from '../../services/pokemons-list'

const Dashboard = props => {
  // const dispatch = useDispatch();
  const param = useParams()
  const limit = 12
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery(GET_POKEMONS_LIST, {
    variables: { limit, offset },
  })

  const nextPage = () => {
    setPage((prevState) => prevState + 1)
    setOffset((prevState) => prevState + limit)
  }

  const prevPage = () => {
    setPage((prevState) => prevState - 1)
    setOffset((prevState) => prevState - limit)
  }

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
          !loading &&
          data.pokemons.results.map((el, i) => {
            return (
              <Card
                key={el.id}
                name={el.name.toUpperCase()}
                counted={el.counted}
                image={el.image}
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
          onClick={() => prevPage() }
        />
        <div>
          {page}
        </div>
        <img
          src={ Images.arrowPageRight }
          alt=''
          className={ `clicked` }
          onClick={ () => nextPage()}
        />
      </div>
    </Container>
  );

};

export default Dashboard;

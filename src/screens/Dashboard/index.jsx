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

  const tempData = Array.apply(null, Array(12)).map((el, i) => {return i})

  const nextPage = () => {
    setPage((prevState) => prevState + 1)
    setOffset((prevState) => prevState + limit)
  }

  const prevPage = () => {
    setPage((prevState) => prevState - 1)
    setOffset((prevState) => prevState - limit)
  }

  const lastPage = () => {
    if(!loading) {
      return Math.ceil(data.pokemons.count / limit)
    }
  }
  if(loading) {
    return (
      <Container
        className={`loading`}
      >
        <div className="content-wrapper">
          {
            tempData.map((el, i) => {
              return (
                <Card
                  key={i}
                  name={''}
                  image={''}
                  loading={loading}
                />
              )
            })
          }
        </div>
        <div className="pagination">
          <img
            src={ Images.arrowPageLeft }
            alt=''
          />
          <div>
            {page}
          </div>
          <img
            src={ Images.arrowPageRight }
            alt=''
          />
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <div className="content-wrapper">
          {
            data.pokemons.results.map((el, i) => {
              return (
                <Card
                  key={el.id}
                  name={el.name.toUpperCase()}
                  image={el.image}
                  loading={loading}
                />
              )
            })
          }

        </div>
        <div className="pagination">
          <img
            src={ Images.arrowPageLeft }
            alt=''
            className={ `clicked ${page === 1 ? 'disabled' : ''}` }
            onClick={() => prevPage() }
          />
          <div>
            {page}
          </div>
          <img
            src={ Images.arrowPageRight }
            alt=''
            className={ `clicked ${lastPage() === page ? 'disabled' : ''}`}
            onClick={ () => nextPage()}
          />
        </div>
      </Container>
    );
  }


};

export default Dashboard;

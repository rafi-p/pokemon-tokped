import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Dashboard,
  Detail,
  MyPokemon,
  NotFound
} from '../screens';

let publicRoutes =  [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/detail/:name',
      component: Detail,
    },
    {
      path: '/my-pokemon',
      component: MyPokemon,
    },
    {
      path: '/not-found',
      component: NotFound,
    },
  ]

const Router = props => {

  return (
    <Switch>
      {
        publicRoutes.map(route =>
          <Route
            key={ route.path }
            exact path={ route.path }
            component={ route.component }
          />
        )
      }
      <Redirect to={ '/not-found' }/>
    </Switch>
  );
};

export default Router;

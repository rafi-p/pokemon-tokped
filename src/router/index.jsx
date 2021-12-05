import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  Dashboard,
  Detail,
  MyPokemon
} from '../screens';

let publicRoutes =  [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/detail',
      component: Detail,
    },
    {
      path: '/my-pokemon',
      component: MyPokemon,
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
      {/* <Redirect to={ '/' }/> */}
    </Switch>
  );
};

export default Router;

import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

import { History as history } from '../helpers/index';

import pokemonListReducer from './pokemonList/reducers';
const routeMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
	pokeList: pokemonListReducer,
	router: connectRouter(history),
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, routeMiddleware)));

export {
	history,
	store };

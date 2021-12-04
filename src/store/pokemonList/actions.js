/* eslint-disable no-undef */
import * as prodListServices from '../../services/pokemonList';

import actionTypes from './actionTypes';

export const getPokemonSuccess = payload => ({
  type: actionTypes.GET_POKEMON_SUCCESS,
  payload: { ...payload },
});

export const getPokemon = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    const apiFetch = await prodListServices.getPokemon(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getPokemonSuccess({ data: data })));
    } else {
      reject(statusText);
    }
  });
};
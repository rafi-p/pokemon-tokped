import { Endpoints } from '../constant/index';
import { convert, customFetch } from '../helpers/index';

export const getPokemon = async(params, data) => {
  const setPokemonList = cats => {
    return cats;
  };

  try {

    const uri = params
    ?`?search={"${params.category ? params.category : ''}":"${params.keyword ? params.keyword : ''}"}`
    : ''

    const response = await customFetch(`${Endpoints.url}${Endpoints.param.list}${uri}`, 'GET', data, false);

    if (response.data) {
      response.data = setPokemonList(response.data);
    } else {
      response.data = {};
    }
    return response
  } catch (error) {
    throw error;
  }
};
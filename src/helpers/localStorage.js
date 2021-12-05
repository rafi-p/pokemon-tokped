/* eslint-disable no-undef */


export function getMyPokemon() {
  return localStorage.getItem('myPokemon') ? JSON.parse(localStorage.getItem('myPokemon')) : undefined;
}

export function setMyPokemon(user) {
  return localStorage.setItem('myPokemon', JSON.stringify(user));
}

export function clearMyPokemon() {
  localStorage.removeItem('myPokemon');
}
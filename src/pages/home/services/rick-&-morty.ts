// import {  } from "@/models";
import {} from '../adapter';

export const rickAndMorty = 'https://rickandmortyapi.com/api/character/2';

export const fetchMorty = async (url: string) => {
  return fetch(url).then(res => res.json()).then(res => );
};

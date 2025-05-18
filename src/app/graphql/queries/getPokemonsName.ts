import { gql } from '@apollo/client';

export const GET_ALL_POKEMON_NAMES = gql`
  query GetAllPokemonNames($first: Int!) {
    pokemons(first: $first) {
      id
      name
    }
  }
`;

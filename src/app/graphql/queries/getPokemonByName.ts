import { gql } from '@apollo/client';

export const GET_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      number
      image
      types
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      image
      types
      classification
      weight { minimum maximum }
      height { minimum maximum }
      fleeRate
      maxCP
      maxHP
      resistant
      weaknesses
      attacks {
        fast { name type damage }
        special { name type damage }
      }
      evolutions {
        id
        number
        name
        image
        types
        weight { minimum maximum }
        height { minimum maximum }
        classification
        resistant
        weaknesses
        maxCP
        fleeRate
        attacks {
          fast { name type damage }
          special { name type damage }
        }
        evolutions {
          id
          number
          name
          image
        }
      }
    }
  }
`;

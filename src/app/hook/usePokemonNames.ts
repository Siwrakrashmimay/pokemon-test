import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMON_NAMES } from '@graphql/queries/getPokemonsName';

export function usePokemonNames(limit = 151) {
  const { data, loading, error } = useQuery(GET_ALL_POKEMON_NAMES, {
    variables: { first: limit },
    fetchPolicy: 'cache-first',
  });

  return {
    names: data?.pokemons,
    loading,
    error,
  };
}

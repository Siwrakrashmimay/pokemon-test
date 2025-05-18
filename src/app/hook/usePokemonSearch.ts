import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '@graphql/queries/getPokemonByName';
import { Pokemon } from '../types/pokemons';

export function usePokemonSearch(name: string, options?: { skip?: boolean }) {
  const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(
    GET_POKEMON_BY_NAME,
    {
      variables: { name },
       skip: options?.skip, 
    },
    
  );

  return {
    result: data?.pokemon || null,
    loading,
    error,
  };
}

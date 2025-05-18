import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from '@graphql/queries/getPokemonDetails';

export  function usePokemonDetails(name: string) {
    const { data ,loading,error} =  useQuery( GET_POKEMON_DETAILS,{
    variables: { name },
    fetchPolicy: 'cache-first',
  });


  return {
    data: data?.pokemon,
    loading,
    error,
  }

}
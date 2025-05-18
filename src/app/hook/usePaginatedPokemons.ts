import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '@graphql/queries/getPokemons';
import { Pokemon } from '../types/pokemons';

export function usePaginatedPokemons(batchSize = 12) {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, loading, refetch } = useQuery(GET_POKEMONS, {
    variables: { first: batchSize },
    fetchPolicy: 'cache-first',

  });

  useEffect(() => {
    if (data?.pokemons && loadedCount === 0) {
      setAllPokemons(data.pokemons);
      setLoadedCount(data.pokemons.length);
    }
  }, [data, loadedCount]);

  const loadMore = async () => {
    setIsLoadingMore(true);
    const { data: moreData } = await refetch({
      first: loadedCount + batchSize,
    });

    const newPokemons = moreData.pokemons.slice(loadedCount);
    setAllPokemons((prev) => [...prev, ...newPokemons]);
    setLoadedCount((prev) => prev + newPokemons.length);
    setIsLoadingMore(false);
  };

  return {
    allPokemons,
    loading,
    isLoadingMore,
    loadMore,
  };
}

// components/pokecard/PokemonListWrapper.tsx

'use client';
import React, { useState } from 'react';

import { PokemonList } from './PokemonList';
import { SearchBox } from '../seacrhbox/SeacrhBox';
import { usePaginatedPokemons } from '@hooks/usePaginatedPokemons';
import { usePokemonSearch } from '@hooks/usePokemonSearch';


export function PokemonSearchableList() {
  const [searchName, setSearchName] = useState<string>('');

  const { allPokemons, loading: loadingList, isLoadingMore, loadMore } =
    usePaginatedPokemons(15);
const { result: searchResult, loading: loadingSearch } = usePokemonSearch(searchName, {
  skip: !searchName,
});

  const showSearch = Boolean(searchName);
  const isLoading = (loadingList && allPokemons.length === 0) || loadingSearch;
  const pokemonsToShow = showSearch
    ? searchResult
      ? [searchResult]
      : []
    : allPokemons;

  return (
    <div className="space-y-4">
      <SearchBox onSelect={setSearchName} />

            {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : showSearch && !searchResult ? (
          <p className="text-center text-gray-500 py-8 text-lg font-semibold">
            No Pokémon found for “{searchName}”
          </p>
        ) : (
          <PokemonList pokemons={pokemonsToShow} />
        )}

      {!showSearch && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            disabled={isLoadingMore}
            className="bg-gray-800 text-white shadow-md px-6 py-2 rounded hover:bg-gray-500 disabled:opacity-50"
          >
            {isLoadingMore ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            ) : (
               <span
            className={` text-1xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg`}
          >
            Load More
          </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
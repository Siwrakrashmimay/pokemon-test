import React from 'react';
import { Pokemon } from '../../types/pokemons';
import  PokemonCard  from './PokemonCard';

interface Props {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon?.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

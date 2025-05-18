'use client';

import React from 'react';
import type { PokemonsDetailType } from '../../types/pokemonsDetail';
import { usePokemonDetails } from '@hooks/usePokemonDetails';
import PokemonHeader from './PokemonHeader';
import PokemonStatsAndAttacks from './PokemonStatsAndAttacks';
import PokemonEvolutions from './PokemonEvolutions';

interface Props {
  name: string;
}

export default function PokemonDetail({ name }: Props) {
  const { data: pokemon, loading } = usePokemonDetails(name) as {
    data?: PokemonsDetailType;
    loading: boolean;
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="text-center py-12 text-gray-600 text-lg font-medium">
        No Pokémon found for ”{name}”
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-4 max-w-6xl mx-auto">
      <PokemonHeader pokemon={pokemon} />

      {/* Stats & Attacks */}
      <div className="mt-10">
        <PokemonStatsAndAttacks pokemon={pokemon} />
      </div>

      {/* Evolutions */}
      <div className="mt-10">
        <PokemonEvolutions evolutions={pokemon.evolutions} />
      </div>
    </div>
  );
}

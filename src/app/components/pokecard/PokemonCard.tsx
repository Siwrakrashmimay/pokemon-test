import React from 'react';
import Link from 'next/link';
import { Pokemon } from '../../types/pokemons';
import { TypeBadge } from '../common/TypeBadge';
import Image from 'next/image';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Link href={`/pokedex/${pokemon.name}`} className="w-full">
      <div className="border rounded-lg shadow p-4 bg-white flex flex-col items-center hover:shadow-lg transition">
        <div className="w-24 h-24 mb-2">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
             width={150}
              height={150}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-bold text-lg text-gray-800">
          {pokemon.number} - {pokemon.name}
        </h3>
        <div className="mt-2 flex flex-wrap justify-center">
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </div>
    </Link>
  );
}
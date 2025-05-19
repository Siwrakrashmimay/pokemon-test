
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Evolution } from '../../types/pokemonEvolution';


interface PokemonEvolutionsProps {
  evolutions?: Evolution[];
}

export default function PokemonEvolutions({ evolutions }: PokemonEvolutionsProps) {
  if (!evolutions || evolutions.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-extrabold mb-4 text-black">Evolutions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {evolutions.map((evolution) => (
          <Link
            key={evolution.id}
            href={`/pokedex/${evolution.name}`}
            className="border p-4 rounded-lg shadow hover:bg-gray-50 text-center"
          >
              <Image
              src={evolution.image}
              alt={evolution.name}
              width={120}
              height={120}
              className="w-24 h-24 mx-auto object-contain mb-2"
            />
            <p className="font-bold text-black">
              {evolution.number} - {evolution.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
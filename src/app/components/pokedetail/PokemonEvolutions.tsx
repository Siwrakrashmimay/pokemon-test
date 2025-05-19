'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Evolution } from '../../types/pokemonEvolution';


export default function PokemonEvolutions({ evolutions }: { evolutions?: Evolution[] }) {
  if (!evolutions || evolutions.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Evolutions</h2>
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
            <p className="font-semibold">
              {evolution.number} - {evolution.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
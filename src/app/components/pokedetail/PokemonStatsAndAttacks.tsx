import React from 'react';
import type { PokemonsDetailType } from '../../types/pokemonsDetail';
import { TypeBadge } from '@components/common/TypeBadge';

interface Props {
  pokemon: PokemonsDetailType;
}

export default function PokemonStatsAndAttacks({ pokemon }: Props) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <strong className="text-black font-bold">Resistant</strong>
        <div className="mt-1 flex flex-wrap gap-2">
          {pokemon.resistant?.map((type: string) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </div>

      <div>
        <strong className="text-black font-bold">Weaknesses</strong>
        <div className="mt-1 flex flex-wrap gap-2">
          {pokemon.weaknesses?.map((type: string) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-extrabold mb-2 text-black">Attacks</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-black">Fast</h3>
            <ul className="list-disc list-inside">
              {pokemon?.attacks?.fast?.map((attack) => (
                <li key={attack.name} className="text-black font-medium">
                  {attack.name} ({attack.type}) - {attack.damage}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-extrabold mb-2 text-black">Special</h3>
        <ul className="list-disc list-inside">
          {pokemon?.attacks?.special?.map((attack) => (
            <li key={attack.name} className="text-black font-medium">
              {attack.name} ({attack.type}) - {attack.damage}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

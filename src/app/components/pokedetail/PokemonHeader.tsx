import React from 'react';
import { TypeBadge } from '@components/common/TypeBadge';
import type { PokemonsDetailType } from '../../types/pokemonsDetail';
import Image from 'next/image';

interface Props {
    pokemon: PokemonsDetailType ;
}

export default function PokemonHeader({ pokemon }: Props) {
    return (
        <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg p-6 text-black">
            <div className="flex-1 flex justify-center items-center">
                <Image src={pokemon.image} 
                    alt={pokemon.name}
                    width={200}
                    height={200} 
                    className="w-64 h-64 object-contain" />
            </div>

            <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-extrabold text-black">
                    {pokemon?.name} <span className="text-gray-700 font-bold">#{pokemon?.number}</span>
                </h1>
                <p className="text-gray-800 italic font-medium">{pokemon?.classification}</p>

                <div className="grid grid-cols-2 gap-4 text-sm bg-gray-100 rounded-lg p-4">
                    <div>
                        <strong className="block text-black font-semibold">Height</strong>
                        <span className="font-medium">{pokemon?.height?.minimum} - {pokemon?.height?.maximum}</span>
                    </div>
                    <div>
                        <strong className="block text-black font-semibold">Weight</strong>
                        <span className="font-medium">{pokemon?.weight?.minimum} - {pokemon?.weight?.maximum}</span>
                    </div>
                    <div>
                        <strong className="block text-black font-semibold">Max HP</strong>
                        <span className="font-medium">{pokemon?.maxHP}</span>
                    </div>
                    <div>
                        <strong className="block text-black font-semibold">Max CP</strong>
                        <span className="font-medium">{pokemon?.maxCP}</span>
                    </div>
                    <div>
                        <strong className="block text-black font-semibold">Flee Rate</strong>
                        <span className="font-medium">{pokemon?.fleeRate}</span>
                    </div>
                </div>

                <div>
                    <strong className="text-black font-semibold">Type</strong>
                    <div className="mt-1 flex flex-wrap gap-2">
                        {pokemon.types.map((type: string) => (
                            <TypeBadge key={type} type={type} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

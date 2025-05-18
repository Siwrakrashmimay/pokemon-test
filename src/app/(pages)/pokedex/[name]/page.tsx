import React from 'react';
import Link from 'next/link';
import PokemonDetail from '@components/pokedetail/PokemonDetail';
type Params = Promise<{ name: string  }>;


export default async function PokemonDetailPage(props: { params: Params }) {
      const params = await props.params;
    const { name } = params;

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Pokédex
      </Link>
  
      <PokemonDetail name={name} />

    </div>
  );
}

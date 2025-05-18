'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePokemonNames } from '@hooks/usePokemonNames';
import { PokemonName } from '../../types/pokemoneName';

export function SearchBox({ onSelect }: { onSelect: (name: string) => void }) {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const names = usePokemonNames(154).names;
  const ref = useRef<HTMLDivElement>(null);

  const filtered = names?.filter((item: PokemonName) =>
      item?.name?.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 10);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative max-w-md ml-auto" ref={ref}>
      <div className="flex">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
          }}
          placeholder="Search Pokémon Name"
          className="flex-grow border text-gray-900 p-2 rounded-l focus:outline-none"
        />
        <button
          onClick={() => {
            onSelect(search);
            setOpen(false);
          }}
          className="bg-gray-800 text-white py-4 shadow-md px-4 rounded-r hover:bg-blue-700"
        >
      <span
            className={` text-1xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg`}
          >
            Search
          </span>
        </button>
      </div>
      {open && filtered.length > 0 && (
        <ul className="absolute z-10 bg-white shadow rounded mt-1 w-full max-h-60 overflow-y-auto border">
          {filtered.map((item: PokemonName) => (
            <li
              key={item.name}
              onClick={() => {
                onSelect(item.name);
                setSearch(item.name);
                setOpen(false);
              }}
              className="px-4 py-2 text-gray-900 hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
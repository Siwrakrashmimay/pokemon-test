import Link from 'next/link';
import React from 'react';


export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" aria-label="Home">
          <span
            className={` text-4xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg`}
          >
            Pokédex
          </span>
        </Link>
      
      </div>
    </header>
    );
}
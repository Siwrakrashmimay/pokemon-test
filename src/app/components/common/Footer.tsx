import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12">
      <div className="container mx-auto text-center px-4">
        <nav className="space-x-4">
          <a href="https://github.com/Siwrakrashmimay" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}
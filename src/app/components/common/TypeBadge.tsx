import React from 'react';
import { typeColors } from '@utils/typeColors';

export  const TypeBadge: React.FC<{ type: string }> = ({ type }) => {
  const bg = typeColors[type] || 'bg-gray-300';
  return (
    <span
      className={`${bg} text-white text-xs px-2 py-1 rounded-full mr-1 mb-1 font- bold`}
    >
      {type}
    </span>
  );
};


export interface PokemonsDetailType {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
  classification?: string;
  weight: { minimum: string; maximum: string };
  height: { minimum: string; maximum: string };
  fleeRate?: number;
  maxCP?: number;
  maxHP?: number;
  resistant?: string[];
  weaknesses?: string[];
  attacks: {
    fast: { name: string; type: string; damage: number }[];
    special: { name: string; type: string; damage: number }[];
  };
  evolutions?: (PokemonsDetailType & { image: string })[];
}

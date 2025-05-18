import { mockPokemons } from '../app/types/mockPokemons';


function getPokemonType(name: string): string | null {

  const found = mockPokemons.find((p) => p.name.toLowerCase() === name.toLowerCase());
  return found?.types[0] ?? null;
}

describe('Pokemon Type Checker', () => {
  it('should return Grass for Bulbasaur', () => {
    expect(getPokemonType('Bulbasaur')).toBe('Grass');
  });

  it('should return Fire for Charmander', () => {
    expect(getPokemonType('Charmander')).toBe('Fire');
  });

  it('should return Water for Squirtle', () => {
    expect(getPokemonType('Squirtle')).toBe('Water');
  });

});
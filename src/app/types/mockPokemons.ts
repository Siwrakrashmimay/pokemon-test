import type { PokemonsDetailType } from '../types/pokemonsDetail';

export const mockPokemons: PokemonsDetailType[] = [
  {
    id: 'UG9rZW1vbjowMDE=',
    number: '001',
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
    types: ['Grass', 'Poison'],
    classification: 'Seed Pokémon',
    weight: {
      minimum: '6.04kg',
      maximum: '7.76kg',
    },
    height: {
      minimum: '0.61m',
      maximum: '0.79m',
    },
    fleeRate: 0.1,
    maxCP: 951,
    maxHP: 1071,
    resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    attacks: {
      fast: [
        { name: 'Tackle', type: 'Normal', damage: 12 },
        { name: 'Vine Whip', type: 'Grass', damage: 7 },
      ],
      special: [
        { name: 'Power Whip', type: 'Grass', damage: 70 },
        { name: 'Sludge Bomb', type: 'Poison', damage: 80 },
      ],
    },
    evolutions: [
      {
        id: 'UG9rZW1vbjowMDI=',
        number: '002',
        name: 'Ivysaur',
        image: 'https://img.pokemondb.net/artwork/large/ivysaur.jpg',
        types: ['Grass', 'Poison'],
        classification: 'Seed Pokémon',
        weight: { minimum: '11.38kg', maximum: '14.63kg' },
        height: { minimum: '0.88m', maximum: '1.13m' },
        fleeRate: 0.07,
        maxCP: 1483,
        maxHP: 1632,
        resistant: [],
        weaknesses: [],
        attacks: { fast: [], special: [] },
        evolutions: [],
      },
    ],
  },
  {
    id: 'UG9rZW1vbjowMDQ=',
    number: '004',
    name: 'Charmander',
    image: 'https://img.pokemondb.net/artwork/large/charmander.jpg',
    types: ['Fire'],
    classification: 'Lizard Pokémon',
    weight: {
      minimum: '7.44kg',
      maximum: '9.56kg',
    },
    height: {
      minimum: '0.53m',
      maximum: '0.68m',
    },
    fleeRate: 0.1,
    maxCP: 841,
    maxHP: 955,
    resistant: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
    weaknesses: ['Water', 'Ground', 'Rock'],
    attacks: {
      fast: [
        { name: 'Ember', type: 'Fire', damage: 10 },
        { name: 'Scratch', type: 'Normal', damage: 6 },
      ],
      special: [
        { name: 'Flame Burst', type: 'Fire', damage: 30 },
        { name: 'Flamethrower', type: 'Fire', damage: 55 },
      ],
    },
    evolutions: [],
  },
  {
    id: 'UG9rZW1vbjowMDc=',
    number: '007',
    name: 'Squirtle',
    image: 'https://img.pokemondb.net/artwork/large/squirtle.jpg',
    types: ['Water'],
    classification: 'Tiny Turtle Pokémon',
    weight: {
      minimum: '7.88kg',
      maximum: '10.13kg',
    },
    height: {
      minimum: '0.44m',
      maximum: '0.56m',
    },
    fleeRate: 0.1,
    maxCP: 891,
    maxHP: 1008,
    resistant: ['Fire', 'Water', 'Ice', 'Steel'],
    weaknesses: ['Electric', 'Grass'],
    attacks: {
      fast: [
        { name: 'Bubble', type: 'Water', damage: 12 },
        { name: 'Tackle', type: 'Normal', damage: 12 },
      ],
      special: [
        { name: 'Aqua Jet', type: 'Water', damage: 25 },
        { name: 'Water Pulse', type: 'Water', damage: 35 },
      ],
    },
    evolutions: [],
  },
];

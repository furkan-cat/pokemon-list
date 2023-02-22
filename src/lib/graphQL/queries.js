export const GET_POKEMONS = `
query getPokemons($limit: Int,$offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
        id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const GET_POKEMON = `
query getPokemons {
    pokemon_v2_pokemon(where: {name: {_eq: "bulbasaur"}}) {
      height
      name
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      
    }
  }
`;

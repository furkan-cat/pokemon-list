import { loadable } from "jotai/utils";
import { atom } from "jotai/vanilla";
import { GET_POKEMONS } from "../graphQl/queries";
import { graphql } from "../utils/graphQL";

const getPokemonsAsync = atom(async (get) => {
  try {
    const data = await graphql.use({
      query: GET_POKEMONS,
      variables: { limit: 10 },
    });
    return data;
  } catch (err) {
    throw err;
  }
});

export const pokemons = loadable(getPokemonsAsync);

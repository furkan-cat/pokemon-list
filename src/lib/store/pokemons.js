import { loadable } from "jotai/utils";
import { atomWithCache } from "jotai-cache";
import { GET_POKEMONS } from "../graphQl/queries";
import { graphql } from "../utils/graphQL";

const getPokemonsAsync = atomWithCache(async (get) => {
  try {
    const data = await graphql.use({
      query: GET_POKEMONS,
      variables: { limit: 17 },
    });
    return data;
  } catch (err) {
    throw err;
  }
});

export const pokemons = loadable(getPokemonsAsync);

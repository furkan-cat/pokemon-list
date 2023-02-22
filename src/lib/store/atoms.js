import { loadable } from "jotai/utils";
import { atomWithCache } from "jotai-cache";
import { GET_POKEMONS } from "../graphQl/queries";
import { graphql } from "../utils/graphQL";
import { atom } from "jotai/vanilla";

const getPokemonsAsync = atomWithCache(async (get) => {
  try {
    const data = await graphql.use({
      query: GET_POKEMONS,
      variables: { limit: 20 },
    });
    return data;
  } catch (err) {
    throw err;
  }
});

export const activeButton = atom("");
export const renderAtom = atom();
export const inputAtom = atom("");
export const apiAtom = loadable(getPokemonsAsync);

import { GET_POKEMONS } from "../graphQl/queries";

export const graphql = {
  use: async (options) => {
    try {
      const response = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
        body: JSON.stringify(options),
        method: "POST",
      });

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const { data } = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  },
};

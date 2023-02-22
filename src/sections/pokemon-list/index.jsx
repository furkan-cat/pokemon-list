import { Container } from "@mantine/core";
import PokemonSearch from "./pokemon-search";
import PokemonTable from "./pokemon-table";
import PokomonListTypes from "./pokemon-type";

const PokemonList = () => {
  return (
    <Container>
      <PokemonSearch  />
      <PokemonTable/>
      <PokomonListTypes />
    </Container>
  );
};

export default PokemonList;

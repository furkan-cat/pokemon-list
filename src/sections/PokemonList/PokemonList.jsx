import { Container } from "@mantine/core";
import React from "react";
import PokemonSearch from "./PokemonSearch";
import PokemonTable from "./PokemonTable";
import PokomonListTypes from "./PokomonListTypes";

const PokemonList = () => {
    const [input, setInput] = useState("");
  return (
    <Container>
      <PokemonSearch />
      <PokemonTable />
      <PokomonListTypes />
    </Container>
  );
};

export default PokemonList;

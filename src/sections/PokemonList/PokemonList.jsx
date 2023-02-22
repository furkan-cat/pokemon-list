import { Container } from "@mantine/core";
import React, { useState } from "react";
import PokemonSearch from "./PokemonSearch";
import PokemonTable from "./PokemonTable";
import PokomonListTypes from "./PokomonListTypes";

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

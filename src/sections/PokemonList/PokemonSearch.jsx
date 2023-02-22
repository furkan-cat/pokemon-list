import { Button, Group, Input, Stack, Text } from "@mantine/core";
import { useAtom } from "jotai/react";
import React, { useState } from "react";
import { pokemons } from "../../lib/store/pokemons";

const PokemonSearch = () => {
  const [renderData, setRenderData] = useState();
  const [value] = useAtom(pokemons);

  const clickHandler = () => {
    if (input.length > 0) {
      setRenderData(filteredData);
    } else {
      setRenderData(value.data?.pokemon_v2_pokemon);
    }
  };
  return (
    <Stack align="center">
      <Text size="lg">Search Your Pokemon</Text>
      <Group spacing={0} noWrap={true} w="100%" maw="450px">
        <Input
          radius="none"
          size="sm"
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
          sx={{ flex: 1 }}
        />
        <Button
          p="sm"
          radius="none"
          c="textButton.0"
          bg="bgButton.0"
          type="submit"
          onClick={clickHandler}
          sx={{
            "&:hover": {
              backgroundColor: "#d9d9d9",
            },
          }}
        >
          Search
        </Button>
      </Group>
    </Stack>
  );
};

export default PokemonSearch;

import { Button, Group } from "@mantine/core";
import { useAtom } from "jotai/react";
import React from "react";
import { filterButtons } from "../../lib/constants";
import { pokemons } from "../../lib/store/pokemons";

const PokomonListTypes = () => {
  const [value] = useAtom(pokemons);

  const filterButtonsHandler = (val) => {
    const filteredButttonsData = value.data?.pokemon_v2_pokemon.filter((item) =>
      item.pokemon_v2_pokemontypes.some((s) =>
        s.pokemon_v2_type.name.includes(val)
      )
    );
    setRenderData(filteredButttonsData);
  };
  return (
    <Group
      mt="sm"
      w="100%"
      spacing={0}
      noWrap={true}
      sx={{
        overflowX: "scroll",
      }}
      className="hide-scroll"
    >
      {filterButtons.map((item) => (
        <Button
          key={item}
          bg="bgTable.0"
          c="bgApp.0"
          radius="none"
          sx={(theme) => ({
            flex: 1,
            "&:not(:last-child)": {
              borderRight: "2px solid #86868696",
            },
            "&:hover": {
              backgroundColor: theme.colors.bgButton[0],
            },
          })}
          onClick={() => filterButtonsHandler(item)}
          className="capitalize"
        >
          {item}
        </Button>
      ))}
    </Group>
  );
};

export default PokomonListTypes;

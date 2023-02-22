import React, { useState } from "react";
import { useAtom } from "jotai/react";
import { Button, Group } from "@mantine/core";
import { activeButton, apiAtom, renderAtom } from "../../lib/store/pokemons";
import { filterButtons } from "../../lib/constants";

const PokomonListTypes = () => {
  const [value] = useAtom(apiAtom);
  const [renderState, setRenderState] = useAtom(renderAtom);
  const [active, setActive] = useAtom(activeButton);

  const filterButtonsHandler = (val, index) => {
    const filteredVal = value.data?.pokemon_v2_pokemon.filter((item) =>
      item.pokemon_v2_pokemontypes.some((s) =>
        s.pokemon_v2_type.name.includes(val)
      )
    );
    setRenderState({ data: { pokemon_v2_pokemon: filteredVal } });
    setActive(index);
  };
  console.log(active);
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
      {filterButtons.map((item, i) => (
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
          onClick={() => filterButtonsHandler(item, i)}
          className={`capitalize ${i === active ? "active" : ""}`}
        >
          {item}
        </Button>
      ))}
    </Group>
  );
};

export default PokomonListTypes;

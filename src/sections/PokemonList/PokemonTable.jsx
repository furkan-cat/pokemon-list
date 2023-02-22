import { Box, Table } from "@mantine/core";
import { useAtom } from "jotai/react";
import React, { useMemo } from "react";
import { tableHeaders } from "../../lib/constants";
import { pokemons } from "../../lib/store/pokemons";

const PokemonTable = () => {
  
  const [value] = useAtom(pokemons);

  const filteredData = useMemo(() => {
    return value.data?.pokemon_v2_pokemon.filter((item) =>
      item.name.includes(input)
    );
  }, [input, value.data]);

  return (
    <Box
      mt="sm"
      sx={{
        overflowX: "scroll",
      }}
      className="hide-scroll"
    >
      <Table
        bg="bgTable.0"
        verticalSpacing="xs"
        horizontalSpacing="xs"
        withColumnBorders={false}
      >
        <thead>
          <tr>
            {tableHeaders.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((item) => {
            const types = item.pokemon_v2_pokemontypes.map(
              ({ pokemon_v2_type }) => pokemon_v2_type.name
            );
            return (
              <tr
                key={item.name}
                onClick={() =>
                  navigate(`/${item.id}`, {
                    state: { background: location },
                  })
                }
              >
                <td className="capitalize">{item.name}</td>
                <td>{item.height} cm</td>
                <td>{item.weight} kg</td>
                <td>{types.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Box>
  );
};

export default PokemonTable;

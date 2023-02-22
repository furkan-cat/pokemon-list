import React, { useEffect } from "react";
import { useAtom } from "jotai/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, createStyles, Table } from "@mantine/core";
import { apiAtom, renderAtom } from "../../lib/store/pokemons";
import { tableHeaders } from "../../lib/constants";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor: theme.colors.bgTable[0],
  },
}));

const PokemonTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { classes, cx } = useStyles();
  const [value] = useAtom(apiAtom);
  const [renderState, setRenderState] = useAtom(renderAtom);

  useEffect(() => {
    setRenderState(value);
  }, []);

  return (
    <Box
      mt="sm"
      sx={{
        overflow: "scroll",
        height: "575px",
      }}
      className="hide-scroll"
    >
      <Table
        bg="bgTable.0"
        verticalSpacing="xs"
        horizontalSpacing="xs"
        withColumnBorders={false}
      >
        <thead className={cx(classes.header)}>
          <tr>
            {tableHeaders.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderState?.data?.pokemon_v2_pokemon?.map((item) => {
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

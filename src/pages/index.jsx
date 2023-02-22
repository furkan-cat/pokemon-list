import { useEffect, useState } from "react";
import { useAtom } from "jotai/react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Table,
  Text,
} from "@mantine/core";
import { pokemons } from "../lib/store/pokemons";
import { filterButtons, tableHeaders } from "../lib/constants";

function Home() {
  const [renderData, setRenderData] = useState();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [value] = useAtom(pokemons);

  useEffect(() => {
    if (value.data?.pokemon_v2_pokemon.length > 0) {
      setRenderData(value.data?.pokemon_v2_pokemon);
    }
  }, [value.data?.pokemon_v2_pokemon]);

  console.log(renderData);

  const clickHandler = () => {
    const filteredData = value.data?.pokemon_v2_pokemon.filter(
      (item) => item.name === input
    );
    setRenderData(filteredData);
  };

  return (
    <Container>
      <Flex direction="column" align="center" mt="lg">
        <Text size="lg">Search Your Pokemon</Text>
        <Box mt="sm">
          <Input
            radius="none"
            size="sm"
            w="500px"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rightSection={
              <Button
                h="100%"
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
            }
          />
        </Box>

        <Table
          w="100%"
          mt="sm"
          verticalSpacing="md"
          horizontalSpacing="xl"
          withColumnBorders={false}
          bg="bgTable.0"
        >
          <thead>
            <tr>
              {tableHeaders.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {renderData?.map((item) => {
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
        <Flex w="100%" mt="sm">
          {filterButtons.map((item) => (
            <Button
              key={item}
              w="100%"
              bg="bgTable.0"
              c="bgApp.0"
              radius="none"
              sx={(theme) => ({
                "&:not(:last-child)": {
                  borderRight: "2px solid #86868696",
                },
                "&:hover": {
                  backgroundColor: theme.colors.bgButton[0],
                },
              })}
            >
              {item}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Home;

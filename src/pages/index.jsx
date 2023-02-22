import { useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai/react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Group,
  Input,
  LoadingOverlay,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { pokemons } from "../lib/store/pokemons";
import PokemonList from "../sections/PokemonList/PokemonList";

function Home() {
  const [renderData, setRenderData] = useState();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [value] = useAtom(pokemons);

  useEffect(() => {
    // console.log("Rendered");
    if (value.data?.pokemon_v2_pokemon.length > 0) {
      setRenderData(value.data?.pokemon_v2_pokemon);
    }
  }, [value.data?.pokemon_v2_pokemon]);

  // const filteredData = useMemo(() => {
  //   return value.data?.pokemon_v2_pokemon.filter((item) =>
  //     item.name.includes(input)
  //   );
  // }, [input, value.data]);

  // const clickHandler = () => {
    
  //   if (input.length > 0) {
  //     setRenderData(filteredData);
  //   } else {
  //     setRenderData(value.data?.pokemon_v2_pokemon);
  //   }
  // };

  const filterButtonsHandler = (val) => {
    const filteredButttonsData = value.data?.pokemon_v2_pokemon.filter((item) =>
      item.pokemon_v2_pokemontypes.some((s) =>
        s.pokemon_v2_type.name.includes(val)
      )
    );
    setRenderData(filteredButttonsData);
  };

  if (value.state === "loading") {
    return (
      <Flex justify="center" align="center">
        <LoadingOverlay visible={true} overlayBlur={2} />
      </Flex>
    );
  }

  return (
    <Container>
      <PokemonList/>
      {/* <Stack align="center">
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
      </Group> */}
    </Container>
  );
}

export default Home;

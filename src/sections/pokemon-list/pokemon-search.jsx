import { Button, Group, Input, Stack, Text } from "@mantine/core";
import { useAtom } from "jotai/react";
import {
  activeButton,
  apiAtom,
  inputAtom,
  renderAtom,
} from "../../lib/store/atoms";

const PokemonSearch = () => {
  const [input, setInput] = useAtom(inputAtom);
  const [active, setActive] = useAtom(activeButton);
  const [value] = useAtom(apiAtom);
  const [renderState, setRenderState] = useAtom(renderAtom);

  const clickHandler = () => {
    setActive("");
    if (input.length > 0) {
      const filteredVal = value.data?.pokemon_v2_pokemon.filter((item) =>
        item.name.includes(input)
      );
      setRenderState({ data: { pokemon_v2_pokemon: filteredVal } });
    } else {
      setRenderState(value);
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

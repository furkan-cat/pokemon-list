import { useAtom } from "jotai/react";
import { Container, Flex, LoadingOverlay } from "@mantine/core";
import PokemonList from "../sections/PokemonList/pokemon-list";
import { apiAtom } from "../lib/store/atoms";

function Home() {
  const [value] = useAtom(apiAtom);

  if (value.state === "loading") {
    return (
      <Flex justify="center" align="center">
        <LoadingOverlay visible={true} overlayBlur={2} />
      </Flex>
    );
  }

  return (
    <Container>
      <PokemonList />
    </Container>
  );
}

export default Home;

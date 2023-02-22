import { Image } from "@mantine/core";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Image
        radius="md"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Random unsplash image"
      />
    </>
  );
};

export default PokemonDetail;

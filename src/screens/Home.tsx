import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "@app/apollo/queries";
import PokemonCard from "@app/components/PokemonCard";
import { Col, Row, Typography } from "antd";
import { IPokemon } from "../types/types";

interface IPokemonData {
  pokemons: IPokemon[];
}

interface IGetPokemonVars {
  first: number;
}

const Home: React.FC = () => {
  const { data, loading, error } = useQuery<IPokemonData, IGetPokemonVars>(
    GET_POKEMONS,
    {
      variables: { first: 30 }
    }
  );

  if (loading) {
    return (
      <Row align="middle" justify="center">
        <Typography.Title level={2}>Loading...</Typography.Title>
      </Row>
    )
  } else if (error) {
    return (
      <Row align="middle" justify="center">
        <Typography.Title level={2}>Something went wrong.</Typography.Title>
      </Row>
    )
  } else if (!data || !data.pokemons) {
    return (
      <Row align="middle" justify="center">
        <Typography.Title level={2}>No pokemon found.</Typography.Title>
      </Row>
    )
  } else {
    return (
      <Row gutter={[20, 20]}>
        {data.pokemons.map(pokemon => (
          <Col key={pokemon.id} span={6}>
            <PokemonCard pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    )
  }
}

export default Home;
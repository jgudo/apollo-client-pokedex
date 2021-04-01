import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "@app/apollo/queries";
import PokemonCard from "@app/components/PokemonCard";
import { useFilter } from "@app/provider/FilterProvider";
import { Col, Row, Typography } from "antd";
import { useMemo } from "react";
import { IPokemon } from "../types/types";

interface IPokemonData {
  pokemons: IPokemon[];
}

interface IGetPokemonVars {
  first: number;
}

const Home: React.FC = () => {
  const { filter } = useFilter();

  const { data, loading, error } = useQuery<IPokemonData, IGetPokemonVars>(
    GET_POKEMONS,
    {
      variables: { first: 30 }
    }
  );

  const pokemons = useMemo(() => {
    if (!filter.element || filter.element === '') return data?.pokemons;
    const filtered = (data as IPokemonData)?.pokemons.filter((pokemon) => {
      return pokemon.types.includes(filter.element as string);
    });

    return filtered;
  }, [data, filter])

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
  } else if (!data || !data.pokemons || !pokemons || pokemons?.length === 0) {
    return (
      <Row align="middle" justify="center">
        <Typography.Title level={2}>No pokemon found.</Typography.Title>
      </Row>
    )
  } else {
    return (
      <Row gutter={[20, 20]}>
        {pokemons.map(pokemon => (
          <Col key={pokemon.id} span={6}>
            <PokemonCard pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    )
  }
}

export default Home;
import { gql, useQuery } from '@apollo/client';
import { Col, Row, Typography } from 'antd';
import React from 'react';
import './App.less';
import Filters from './components/Filters';
import PokemonCard from './components/PokemonCard';
import { IPokemon } from './types/types';

interface IPokemonData {
  pokemons: IPokemon[];
}

interface IGetPokemonVars {
  first: number;
}

const App: React.FC = () => {
  const { data, loading, error } = useQuery<IPokemonData, IGetPokemonVars>(
    GET_POKEMONS,
    {
      variables: { first: 30 }
    }
  );

  return (
    <div className="App">
      <Row wrap={false} justify="center" align="middle">
        <Col style={{ textAlign: 'center' }}>
          <Typography.Title level={1}>PokéMo</Typography.Title>
          <Typography.Paragraph>Gotta catch 'em all!</Typography.Paragraph>
        </Col>
      </Row>
      <Filters />
      <br /> <br />
      {loading ? (
        <Row align="middle" justify="center">
          <Typography.Title level={2}>Loading...</Typography.Title>
        </Row>
      ) : error ? (
        <Row align="middle" justify="center">
          <Typography.Title level={2}>Something went wrong/</Typography.Title>
        </Row>
      ) : !data ? (
        <Row align="middle" justify="center">
          <Typography.Title level={2}>No pokemons found.</Typography.Title>
        </Row>
      ) : (
        <Row gutter={[20, 20]}>
          {data.pokemons.map(pokemon => (
            <Col key={pokemon.id} span={6}>
              <PokemonCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

const GET_POKEMONS = gql`
  query GetPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name,
      image,
      evolutions {
        id,
        number,
        name,
        image
      },
      types
    }
  }
`

export default App;

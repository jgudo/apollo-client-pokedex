import { useQuery } from '@apollo/client';
import { GET_SINGLE_POKEMON } from '@app/apollo/queries';
import PokemonDetails from '@app/components/PokemonDetails';
import { IPokemon } from '@app/types/types';
import { Row, Typography } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface IPokemonData {
  pokemon: IPokemon;
}

interface IGetPokemonVars {
  id: string | null;
  name: string | null;
}

const ViewPokemon = () => {
  const query = new URLSearchParams(useLocation().search);

  const { data, loading, error } = useQuery<IPokemonData, IGetPokemonVars>(
    GET_SINGLE_POKEMON,
    {
      variables: {
        id: query.get('id'),
        name: query.get('name')
      }
    }
  )

  console.log(data)

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
  } else if (!data || !data.pokemon) {
    return (
      <Row align="middle" justify="center">
        <Typography.Title level={2}>No pokemon found.</Typography.Title>
      </Row>
    )
  } else {
    return (
      <PokemonDetails pokemon={data.pokemon} />
    )
  }
};

export default ViewPokemon;
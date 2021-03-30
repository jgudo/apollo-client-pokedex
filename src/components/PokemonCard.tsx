import Card from 'antd/lib/card';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { IPokemon } from '../types/types';

interface IProps {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<IProps> = ({ pokemon }) => {
  return (
    <Card
      hoverable
      cover={<img
        className="pokemon-image"
        src={pokemon.image}
        alt={pokemon.name}
      />}
    >
      <Meta
        title={pokemon.name}
        description={pokemon.types ? `${pokemon.types?.join(', ')} type pokemon` : 'Unknown pokemon type'}
      />
    </Card>
  );
};

export default PokemonCard;

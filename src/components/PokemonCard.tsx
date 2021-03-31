import Card from 'antd/lib/card';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useHistory } from 'react-router';
import { IPokemon } from '../types/types';

interface IProps {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<IProps> = ({ pokemon }) => {
  const history = useHistory();

  return (
    <Card
      hoverable
      cover={<img
        className="pokemon-card-image"
        src={pokemon.image}
        alt={pokemon.name}
      />}
      onClick={() => history.push(`/pokemon?id=${pokemon.id}&name=${pokemon.name}`)}
    >
      <Meta
        title={pokemon.name}
        style={{ textAlign: 'center' }}
        description={pokemon.types ? `${pokemon.types?.join(', ')} type pokemon` : 'Unknown pokemon type'}
      />
    </Card>
  );
};

export default PokemonCard;

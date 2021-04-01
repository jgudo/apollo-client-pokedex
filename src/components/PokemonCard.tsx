import { Row, Tooltip } from 'antd';
import Card from 'antd/lib/card';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useHistory } from 'react-router';
import { IPokemon } from '../types/types';

interface IProps {
  pokemon: IPokemon;
}

const elementImageURL = 'https://res.cloudinary.com/jgudo/image/upload/v1617244060/elements';

const PokemonCard: React.FC<IProps> = ({ pokemon }) => {
  const history = useHistory();

  return (
    <Card
      className="pokemon-card"
      hoverable
      cover={<img
        className="pokemon-card-image"
        src={pokemon.image}
        alt={pokemon.name}
      />}
      onClick={() => history.push(`/pokemon?id=${pokemon.id}&name=${pokemon.name}`)}
    >
      <Row justify="center">
        {pokemon.types.map(type => (
          <Tooltip placement="top" title={`${type} Type`}>
            <img className="pokemon-type-badge-sm" src={`${elementImageURL}/${type}.svg`} alt={type} />
          </Tooltip>
        ))}
      </Row>
      <br />
      <Meta
        title={pokemon.name}
        style={{ textAlign: 'center' }}
        description={pokemon.classification}
      />
    </Card>
  );
};

export default PokemonCard;

import { IPokemon } from '@app/types/types';
import { Card, Col, Row, Statistic, Tooltip, Typography } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';

interface IProps {
  pokemon: IPokemon;
}

const PokemonDetails: React.FC<IProps> = ({ pokemon }) => {
  const history = useHistory();

  return (
    <Row>
      <Col span={12}>
        <img
          className="pokemon-details-image"
          src={pokemon.image}
          alt={pokemon.name}
        />
        {(pokemon.evolutions && pokemon.evolutions?.length !== 0) && (
          <>
            <Col style={{ textAlign: 'center' }}>
              <Typography.Text type="secondary">Evolutions</Typography.Text>
            </Col>
            <br />
            <Row justify="center">
              {pokemon.evolutions?.map(poke => (
                <Col span={6}>
                  <Tooltip placement="top" title={poke.name}>
                    <Card
                      hoverable
                      style={{ width: 120, height: 120, padding: '5%' }}
                      cover={<img alt="example" src={poke.image} style={{ objectFit: 'contain' }} />}
                      onClick={() => history.push(`/pokemon?id=${poke.id}&name=${poke.name}`)}
                    />
                  </Tooltip>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Col>
      <Col span={12}>
        <Typography.Title level={1}>{pokemon.name}</Typography.Title>
        <Row>
          <Col span={6}>
            <Statistic title="Max CP" value={pokemon.maxCP} />
          </Col>
          <Col span={6}>
            <Statistic title="Max HP" value={pokemon.maxHP} />
          </Col>
          <Col span={6}>
            <Statistic title="Flee Rate" value={pokemon.fleeRate} />
          </Col>
        </Row>
        <br />
        <Typography.Text type="secondary">Pokemon Types</Typography.Text>
        <Typography.Title level={4} style={{ marginTop: '5px' }}>{pokemon.types.join(',  ')}</Typography.Title>
        <br />
        <Typography.Text type="secondary">Resistant</Typography.Text>
        <Typography.Title level={4} style={{ marginTop: '5px' }}>{pokemon.resistant.join(',  ')}</Typography.Title>
        <br />
        <Typography.Text type="secondary">Weaknesses</Typography.Text>
        <Typography.Title level={4} style={{ marginTop: '5px' }}>{pokemon.weaknesses.join(',  ')}</Typography.Title>
      </Col>
    </Row>
  )
}

export default PokemonDetails;
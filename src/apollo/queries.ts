import { gql } from '@apollo/client';
import { CORE_POKEMON_FIELDS } from '@app/apollo/fragments';

export const GET_POKEMONS = gql`
  ${CORE_POKEMON_FIELDS}
  query GetPokemons($first: Int!) {
    pokemons(first: $first) {
      ...CorePokemonFields
    }
  }
`;

export const GET_SINGLE_POKEMON = gql`
  ${CORE_POKEMON_FIELDS}
  query GetPokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      ...CorePokemonFields
      classification
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      attacks {
        fast {
          name
          type
          damage
        }
        special{
          name
          type
          damage
        }
      }  
    }
  }
`;

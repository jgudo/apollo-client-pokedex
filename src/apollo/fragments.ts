import { gql } from "@apollo/client";

export const CORE_POKEMON_FIELDS = gql`
  fragment CorePokemonFields on Pokemon {
    id
    number
    name
    image
    classification
    evolutions {
      id
      number
      name
      image
    }
    types
  }
`;


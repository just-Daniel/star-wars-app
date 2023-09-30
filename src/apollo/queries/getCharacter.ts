import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
  query GetCharacter($personId: ID!) {
    person(id: $personId) {
      id
      name
      birthYear
      height
      mass
      homeworld {
        id
        name
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;

export type CharacterType = {
  id: string;
  name: string;
  birthYear: Date;
  height: number;
  mass: number;
  homeworld: {
    id: string;
    name: string;
  };
  filmConnection: {
    films: {
      id: string;
      title: string;
    }[];
  };
};

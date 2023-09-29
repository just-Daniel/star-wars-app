import { gql } from '@apollo/client';

export const GET_MOVIE = gql`
  query GetMovie ($filmId: !ID) {
    film(filmID: $filmId) {
      id
      title
      releaseDate
      openingCrawl
      speciesConnection {
        totalCount
      }
      planetConnection {
        totalCount
      }
      vehicleConnection {
        totalCount
      }
      characterConnection {
        characters {
          id
          name
        }
      }
    }
  }
`;

export type GetMovieType = {
    id: string
    title: string
    releaseDate: Date
    openingCrawl: string
    speciesConnection: { totalCount: number }
    planetConnection: { totalCount: number }
    vehicleConnection: { totalCount: number }
    characterConnection: {
      characters: { id: string; name: string }[]
    }
};

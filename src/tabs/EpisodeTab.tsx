import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MovieType } from '../apollo/queries/getMovie';
import { ScreenNavigationProp } from '../navigations/navigation';
import { useQuery } from '@apollo/client';
import { GET_ALL_MOVIES } from '../apollo/queries/getAllMovies';
import type { GetAllMoviesType } from '../apollo/queries/getAllMovies';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import SortByDate from '../components/SortByDate';
import MovieList from '../components/MovieList';
import { SafeAreaView } from 'react-native-safe-area-context';

const EpisodeTab = ({ navigation }: { navigation: ScreenNavigationProp }) => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_MOVIES);
  const [movies, setMovies] = useState<GetAllMoviesType[] | []>([]);
  const [sortByDate, setSortByDate] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (data?.allFilms?.films?.length) {
        setMovies(data?.allFilms?.films);
      }
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage error={error.message} onRetry={refetch} />;
  }

  const toggleSort = () => {
    const sortedMovies = movies.slice().sort((a, b) => {
      const dateA = new Date(a.releaseDate).getTime();
      const dateB = new Date(b.releaseDate).getTime();

      if (sortByDate) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    setSortByDate(!sortByDate);
    setMovies(sortedMovies);
  };

  const goToMovieScreen = (filmId: string) => {
    navigation.navigate('Movie', { filmId });
  };
 
  return (
    <View style={{ flex: 1 }}>
      <SortByDate sortByDate={sortByDate} onClick={toggleSort} />
      <MovieList data={movies} onItemClick={goToMovieScreen} />
    </View>
  );
};

export default EpisodeTab;

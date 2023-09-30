import React from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { GetAllMoviesType } from '../../apollo/queries/getAllMovies';

interface MovieListProps {
  data: GetAllMoviesType[];
  onItemClick: (movieId: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ data, onItemClick }) => {
  const renderItem = ({ item }: { item: GetAllMoviesType }) => (
    <TouchableOpacity
      onPress={() => onItemClick(item.id)}
      style={styles.itemContainer}
      activeOpacity={0.8}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.releaseDate}>{item.releaseDate}</Text>
      <Text style={styles.openingCrawl}>
        {item.openingCrawl.slice(0, 50)}
        {item.openingCrawl.length > 50 ? '...' : ''}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontSize: 16,
    marginTop: 8,
  },
  openingCrawl: {
    fontSize: 14,
    marginTop: 8,
    color: 'gray',
  },
});

export default MovieList;

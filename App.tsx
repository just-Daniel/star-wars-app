import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigation from './src/navigations/navigation';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/apollo';
import { LikedCharactersProvider } from './src/context/LikedCharactersContext';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <LikedCharactersProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </LikedCharactersProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

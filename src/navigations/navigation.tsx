import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import CharacterScreen from '../screens/CharacterScreen';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import { ImageBackground, StyleSheet } from 'react-native';
import { CharacterType } from '../apollo/queries/getCharacter';
import { MovieType } from '../apollo/queries/getMovie';

type RootStackParamList = {
  Home: undefined;
  Character: { personId: string };
  Movie: { filmId: string };
};
export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Character" component={CharacterScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;

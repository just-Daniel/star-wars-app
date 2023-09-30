import React from 'react';
import { View, Text } from 'react-native';
import { ScreenNavigationProp } from '../navigations/navigation';
import { CharacterType } from '../apollo/queries/getCharacter';

const LikedCharactersTab = ({
  navigation,
}: {
  navigation: ScreenNavigationProp;
}) => {
  // Function to navigate to the Character screen
  const goToCharacterScreen = (personId: string) => {
    navigation.navigate('Character', { personId });
  };

  return (
    <View>
      <Text>Liked Characters Tab</Text>
      {/* Display the list of liked characters and implement navigation */}
    </View>
  );
};

export default LikedCharactersTab;

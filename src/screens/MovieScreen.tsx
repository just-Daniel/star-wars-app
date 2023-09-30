import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const MovieScreen = () => {
  const [value, setValue] = useState('');
  const inputHandler = (text: string) => setValue(text);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>MovieScreen</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <Text style={styles.btnTitle}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',

    borderRadius: 5,
    height: 40,
  },
  inputTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
  },
  form: {
    marginHorizontal: 40,
  },
  btn: {
    marginTop: 40,
    backgroundColor: '#ffb6c1',
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  btnTitle: {
    color: '#f0f8ff',
    fontSize: 17,
  },
});

export default MovieScreen;

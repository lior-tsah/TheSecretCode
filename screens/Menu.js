import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {menuURL} from '../data';
const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startMenu}>
      <Text style={styles.title}>The Secret Code </Text>

      <Image
        source={{
          uri: menuURL,
        }}
        style={styles.winning}
      />
      <View style={styles.button}>
        <Button
          title="Start Game"
          onPress={() => navigation.navigate('Game')}
          color="green"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startMenu: {
    backgroundColor: '#00004f',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    width: '100%',
    height: '100%',
  },

  title: {
    paddingTop: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontFamily: 'monospace',
    flex: 2,
  },

  winning: {
    width: '100%',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    borderRadius: 500,
  },
  button: {marginTop: 25, width: 200, justifyContent: 'center', flex: 1},
});

export default Menu;

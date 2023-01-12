import React from 'react';
import {StyleSheet, Image, View, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';
const Win = props => {
  const navigation = useNavigation();
  const url = props.route.params;
  return (
    <View style={styles.main}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.winning}
      />
      <View style={styles.buttons}>
        <Button
          title="Go To Main Menu"
          onPress={() => navigation.navigate('Menu')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  winning: {
    width: '100%',
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  buttons: {
    justifyContent: 'space-between',
    marginBottom: 40,
    flex: 1,
  },
});

export default Win;

import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {XURL} from '../data';

const Xbutton = props => {
  const {size, onPress} = props;
  return (
    <TouchableOpacity
      disabled={!onPress}
      style={{
        width: size,
        height: size,
        margin: 5,
      }}
      onPress={onPress}>
      <Image
        source={{
          uri: XURL,
        }}
        style={styles.winning}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  winning: {
    width: '100%',
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
});

export default Xbutton;

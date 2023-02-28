import React, {useMemo, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native';
import {SettingsContext} from '../SettingsContext';

const SpinIcon = props => {
  const {imgUrl} = props;
  const {currLanguage, level} = useContext(SettingsContext);

  const spinValue = new Animated.Value(0);
  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };

  useEffect(() => {
    spin();
  }, [currLanguage, level]);

  return (
    <Animated.View style={[styles.spin, {transform: [{rotate}]}]}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.spin}
      />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  spin: {
    width: '50%',
    flex: 2,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 5000,
  },
});

export default SpinIcon;

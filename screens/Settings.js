import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Animated,
  Easing,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {language, wheelURL} from '../data';
import {LanguageContext} from '../LanguageContext';
const Settings = props => {
  const navigation = useNavigation();
  const {currLanguage, setCurrLanguage} = useContext(LanguageContext);
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
  }, []);

  return (
    <View style={{height: '100%', backgroundColor: '#00004f'}}>
      <Text style={styles.title}>{language[currLanguage].settings}</Text>

      <Animated.View style={[styles.winning, {transform: [{rotate}]}]}>
        <Image
          source={{
            uri: wheelURL,
          }}
          style={styles.winning}
        />
      </Animated.View>

      <View style={styles.startMenu}>
        <View style={styles.button}>
          <Button
            title={language[currLanguage].rulesBtn}
            onPress={() => navigation.navigate('Rules')}
            color="green"
          />
        </View>
        <View style={styles.button}>
          <Button
            title={language[currLanguage].changeLanguageBtn}
            onPress={() =>
              currLanguage === 'en'
                ? setCurrLanguage('he')
                : setCurrLanguage('en')
            }
            color="blue"
          />
        </View>
        <View style={styles.button}>
          <Button
            title={language[currLanguage].backBtn}
            onPress={() => navigation.navigate('Menu')}
            color="red"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startMenu: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 2,
    padding: 30,
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
    flex: 1,
  },
  winning: {
    width: '50%',
    flex: 2,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 5000,
  },
  button: {width: 200},
});

export default Settings;

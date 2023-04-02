import React, {useContext} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {language} from '../data';
import {useNavigation} from '@react-navigation/native';
import {SettingsContext} from '../SettingsContext';
import RegularButton from '../components/RegularButton';

const Win = props => {
  const navigation = useNavigation();
  const url = props.route.params;
  const {currLanguage} = useContext(SettingsContext);

  return (
    <View style={styles.main}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.winning}
      />
      <View style={styles.buttons}>
        <RegularButton
          width={'100%'}
          onPress={() => navigation.navigate('Menu')}
          text={language[currLanguage].backToMainMenuBtn}
          color={'green'}
          fontSize={20}
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
    backgroundColor: '#00004f',
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

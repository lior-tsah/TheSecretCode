import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dropdown from './Dropdown';
import {language} from '../data';
import RegularButton from './RegularButton';

const Header = props => {
  const {levels, numOfTurn, isShowSecretCode, currLanguage} = props;

  const genericTextStyle = {
    fontSize: 35,
    fontFamily: 'cursive',
  };
  const textDetails = [
    {
      text: `${language[currLanguage].turn} :`,
      style: {color: '#fff'},
    },
    {
      text: `${10 - numOfTurn}`,
      style: {color: 'green', fontWeight: 'bold'},
    },
    {
      text: ' / ',
      style: {color: '#fff', fontWeight: 'bold'},
    },
    {
      text: '10',
      style: {color: 'red', fontWeight: 'bold'},
    },
  ];

  const styles = StyleSheet.create({
    main: {
      flex: 2,
      flexDirection: 'row-reverse',
      height: '100%',
    },
    dropdown: {
      padding: 10,
      height: '100%',
    },
    text: {
      //justifyContent: 'center',
      //alignItems: 'center',
      flexDirection: currLanguage === 'he' ? 'row' : 'row-reverse',
    },
    textPicker: {
      flex: 4,
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 20,
    },
  });
  return (
    <View style={styles.main}>
      {!isShowSecretCode && (
        <View style={styles.dropdown}>
          {levels.map((level, index) => (
            <RegularButton
              key={index}
              width={'100%'}
              height={'50%'}
              onPress={level.func}
              text={level.label}
              color={'#00296f'}
              fontSize={16}
            />
          ))}
        </View>
      )}
      <View style={styles.textPicker}>
        <View style={styles.text}>
          {textDetails.map((text, index) => (
            <Text key={index} style={[genericTextStyle, text.style]}>
              {text.text}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Header;

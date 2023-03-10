import React, {useMemo, useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {language, wheelURL} from '../data';
import {SettingsContext} from '../SettingsContext';
import Dropdown from '../components/Dropdown';
import SpinIcon from '../components/SpinIcon';
const Settings = props => {
  const navigation = useNavigation();
  const {currLanguage, setCurrLanguage, setLevel} = useContext(SettingsContext);

  const levels = useMemo(() => {
    return [
      {label: `${language.en.easy} - ${language.he.easy}`, value: 0},
      {label: `${language.en.medium} - ${language.he.medium}`, value: 1},
      {label: `${language.en.high} - ${language.he.high}`, value: 2},
    ];
  }, [currLanguage]);

  const languages = [
    {label: 'English', value: 'en'},
    {label: 'עברית', value: 'he'},
  ];

  const buttonsDetails = [
    {
      title: language[currLanguage].rulesBtn,
      func: () => navigation.navigate('Rules'),
      color: 'blue',
    },
    {
      title: language[currLanguage].backBtn,
      func: () => navigation.navigate('Menu'),
      color: 'red',
    },
  ];

  const dropdownsDetails = [
    {
      options: levels,
      backgroundColor: 'yellow',
      placeholder: language[currLanguage].levelPlaceholder,
      onSelectOption: option => setLevel(option.value),
      textColor: 'black',
    },
    {
      options: languages,
      backgroundColor: 'green',
      placeholder: language[currLanguage].selectLanguagePlacehlder,
      onSelectOption: option => setCurrLanguage(option.value),
      textColor: 'white',
    },
  ];

  return (
    <View style={{height: '100%', backgroundColor: '#00004f'}}>
      <Text style={styles.title}>{language[currLanguage].settings}</Text>

      <SpinIcon imgUrl={wheelURL} />

      <View style={styles.startMenu}>
        {dropdownsDetails.map((dropdown, index) => (
          <View style={styles.button} key={index}>
            <Dropdown {...dropdown} />
          </View>
        ))}

        {buttonsDetails.map((button, index) => (
          <View style={styles.button} key={index}>
            <Button
              title={button.title}
              onPress={button.func}
              color={button.color}
            />
          </View>
        ))}
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
  button: {width: 200, height: 40},
});

export default Settings;

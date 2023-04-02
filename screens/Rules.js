import React, {useContext} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {language} from '../data';
import {SettingsContext} from '../SettingsContext';
import RegularButton from '../components/RegularButton';
const Rules = props => {
  const navigation = useNavigation();
  const {currLanguage} = useContext(SettingsContext);

  const textArray = [
    {text:language[currLanguage].ruleSubTitle1, style: styles.subTitle}, 
    {text:language[currLanguage].text2, style: styles.text}, 
    {text:language[currLanguage].ruleSubTitle2, style: styles.subTitle}, 
    {text:language[currLanguage].text3, style: styles.text}, 
    {text:language[currLanguage].text4, style: styles.text}, 
    {text:language[currLanguage].text5, style: styles.text}, 
    {text:language[currLanguage].ruleSubTitle3, style: styles.subTitle}, 
    {text:language[currLanguage].text6, style: styles.text}, 
    {text:language[currLanguage].text7, style: styles.text}, 
  ];
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{language[currLanguage].ruleTitle}</Text>
      <ScrollView style={styles.scroll}>
        {textArray.map((textObj, index) => (
          <Text style={textObj.style} key={index}>
            {textObj.text}
          </Text>
        ))}
      </ScrollView>
      <View style={{marginBottom: 15}}>
        <RegularButton
          width={100}
          onPress={() => navigation.navigate('Settings')}
          text={language[currLanguage].backBtn}
          color={'green'}
          fontSize={18}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#00004f',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 45,
    fontFamily: 'monospace',
  },
  scroll: {
    flex: 4,
    margin: 10,
  },
  text: {
    margin: 7,
    color: 'yellow',
    fontSize: 20,
    fontFamily: 'monospace',
  },
  subTitle: {
    margin: 7,
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 22,
    fontFamily: 'monospace',
  },
  buttons: {
    justifyContent: 'space-between',
    marginBottom: 40,
    flex: 1,
  },
});

export default Rules;

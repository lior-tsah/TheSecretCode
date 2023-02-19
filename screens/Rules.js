import React, {useContext} from 'react';
import {Text, Button, View, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {language} from '../data';
import {LanguageContext} from '../LanguageContext';
const Rules = props => {
  const navigation = useNavigation();
  const {currLanguage, setCurrLanguage} = useContext(LanguageContext);

  const textArray = [
    language[currLanguage].text2,
    language[currLanguage].text3,
    language[currLanguage].text4,
    language[currLanguage].text5,
  ];
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{language[currLanguage].ruleTitle}</Text>

      <ScrollView style={styles.scroll}>
        <Text style={styles.subTitle}>
          {language[currLanguage].ruleSubTitle1}
        </Text>
        <Text style={styles.text}>{language[currLanguage].text1}</Text>
        <Text style={styles.subTitle}>
          {language[currLanguage].ruleSubTitle2}
        </Text>
        {textArray.map((text, index) => (
          <Text style={styles.text} key={index}>
            {text}
          </Text>
        ))}
      </ScrollView>
      <View style={{marginBottom: 15}}>
        <Button
          title={language[currLanguage].backBtn}
          onPress={() =>
            navigation.navigate('Settings')
          }
          color="green"
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

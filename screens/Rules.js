import React from 'react';
import {Text, Button, View, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Rules = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Text style={styles.title}>How To Play?</Text>

      <ScrollView style={styles.scroll}>
        <Text style={styles.subTitle}>Goal:</Text>
        <Text style={styles.text}>
          You need to find the code consisting of four different colors.
        </Text>
        <Text style={styles.subTitle}>Gameplay:</Text>
        <Text style={styles.text}>
          You have 10 turns. (The first starts from the bottom line).
        </Text>
        <Text style={styles.text}>
          In each turn you must choose 4 different colors in a row as follows:
          You must choose a color from the color list on the side. After the
          color is selected, it can be placed in the board by clicking on the
          board in the appropriate place.
        </Text>
        <Text style={styles.text}>
          After four colors have been selected, the turn can be ended. As long
          as the turn is not over, you can remove a selected color from the
          board by clicking on it. After a turn ends, we are given hints as
          follows:
        </Text>
        <Text style={styles.text}>
          For each correct color that is in the correct position in the
          sequence, you get a "bull" (indicated by a red pin). For each correct
          color that is not in the correct position in the sequence, you get a
          "hit" (yellow pin). The game ends in victory when all four colors are
          discovered in the correct position (four "bulls").
        </Text>
      </ScrollView>
      <View style={{marginBottom: 15}}>
        <Button
          title="Back"
          onPress={() => navigation.navigate('Menu')}
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

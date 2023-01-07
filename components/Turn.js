import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Turn = props => {
  const {turnIndex, turn, numOfTurn, onPressBoard, result, chosenColor} = props;

  const renderResults = (res, index) => {
    let background = '#000';
    switch (res) {
      case 1:
        background = '#FFFF00';
        break;
      case 2:
        background = '#FF0000';
        break;
    }
    return (
      <View
        key={index.toString()}
        style={[styles.resball, {backgroundColor: background}]}
      />
    );
  };
  return (
    <View key={turnIndex.toString()} style={styles.turn}>
      <View style={styles.soldiers}>
        {Object.keys(turn).map((key, index) => (
          <TouchableOpacity
            disabled={turnIndex !== numOfTurn || !chosenColor}
            onPress={() => onPressBoard(key)}
            key={`${index}.`}>
            <View
              style={
                turn[key]?.color
                  ? [styles.miniball, {backgroundColor: turn[key].color}]
                  : styles.miniball
              }
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.results} />
      {result.map((res, i) => renderResults(res, i))}
    </View>
  );
};

const styles = StyleSheet.create({
  miniball: {
    borderRadius: 25,
    width: 25,
    height: 25,
    marginVertical: 5,
    borderColor: '#000',
    borderWidth: 5,
  },
  resball: {
    borderRadius: 25,
    width: 10,
    height: 10,
    marginHorizontal: 2,
    justifyContent: 'space-between',
  },
  turn: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    flex: 5,
  },
  soldiers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 5,
  },
  results: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: '100%',
    borderRightWidth: 3,
    borderRightColor: '#fff',
    marginRight: 20,
  },
});

export default Turn;

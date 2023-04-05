import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Xbutton from './Xbutton';

const Turn = props => {
  const {turnIndex, turn, numOfTurn, onPressBoard, result, chosenColor, isShowSecretCode} = props;

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
        style={[
          styles.resball,
          {backgroundColor: background},
        //  index % 2 === 0 && {top: 5},
        ]}
      />
    );
  };
  return (
    <View key={turnIndex.toString()} style={styles.turn}>
      <View style={styles.soldiers}>
        {Object.keys(turn).map((key, index) => (
          <TouchableOpacity
            disabled={turnIndex !== numOfTurn || !chosenColor || isShowSecretCode}
            onPress={() => onPressBoard(key)}
            key={`${index}.`}>
            <View
              style={
                turn[key]?.color
                  ? [styles.miniball, {backgroundColor: turn[key].color}]
                  : styles.miniball
              }>
              {turn[key]?.isSelected && <Xbutton size={10} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.num}>
        <Text
          style={[
            styles.numText,
            turnIndex === numOfTurn && {color: '#b5ff36'},
          ]}>
          {10 - turnIndex}
        </Text>
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
    borderWidth: 3,
  },
  num: {
    flex: 8,
    alignItems: 'center',
    marginRight: 5,
  },
  numText: {
    fontWeight: 'bold',
    fontSize: 16,
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
    flex: 50,
  },
  results: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 5,
    height: '100%',
    borderRightWidth: 3,
    borderRightColor: '#fff',
    marginRight: 5,
  },
});

export default Turn;

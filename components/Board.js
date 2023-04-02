import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Turn from './Turn';

const Board = props => {
  const {
    onPressBoard,
    turns,
    results,
    numOfTurn,
    isShowSecretCode,
    secretCode,
    chosenColor,
  } = props;

  return (
    <View style={styles.borad}>
      <View
        style={[
          styles.secretCode,
          isShowSecretCode
            ? {justifyContent: 'flex-end'}
            : {justifyContent: 'center'},
        ]}>
        {isShowSecretCode ? (
          secretCode.map(color => (
            <View
              key={color.id.toString()}
              style={[styles.miniball, {backgroundColor: color.color}]}
            />
          ))
        ) : (
          <Text style={styles.title}>S E C R E T - C O D E</Text>
        )}
      </View>
      <View style={styles.turns}>
        {turns.map((turn, turnIndex) => (
          <Turn
            key={turnIndex.toString()}
            turnIndex={turnIndex}
            turn={turn}
            numOfTurn={numOfTurn}
            onPressBoard={onPressBoard}
            result={results[turnIndex].sort((a, b) => a - b)}
            chosenColor={chosenColor}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borad: {
    paddingRight: 10,

    height: '90%',
    justifyContent: 'space-between',
    flex: 4,
  },
  title: {fontWeight: 'bold'},
  secretCode: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFF00',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  turns: {
    flex: 10,
    padding: 10,
    backgroundColor: '#006fff',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
  },
  miniball: {
    borderRadius: 25,
    width: 25,
    height: 25,
    marginVertical: 5,
    borderColor: '#000',
    borderWidth: 3,
    marginHorizontal: 10,
  },
});

export default Board;

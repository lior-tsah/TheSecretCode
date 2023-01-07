/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Board from '../components/Board';
import NavColors from '../components/NavColors';
import {
  initialTurns,
  initialResults,
  colors,
  Results,
  arrayDeepClone,
} from '../data';
import {useNavigation} from '@react-navigation/native';

const Game = () => {
  const navigation = useNavigation();

  const [chosenColor, setChosenColor] = useState();
  const [numOfTurn, setNumOfTurn] = useState(9);
  const [isShowSecretCode, setShowSecretCode] = useState(false);
  const [secretCode, setSecretCode] = useState([]);
  const [colorsInTurn, setColorsInTurn] = useState([]);
  const [turns, setTurns] = useState(arrayDeepClone(initialTurns));
  const [isWin, setWinning] = useState(false);
  const [results, setResults] = useState([...initialResults]);

  const currentTurn = numOfTurn >= 0 ? turns[numOfTurn] : null;

  const onPressBoard = key => {
    if (!currentTurn[key]) {
      if (colorsInTurn.every(colorId => chosenColor.id !== colorId)) {
        currentTurn[key] = chosenColor;
        setColorsInTurn([...colorsInTurn, chosenColor.id]);
      }
    } else {
      const currColorId = currentTurn[key].id;
      currentTurn[key] = null;
      setColorsInTurn(colorsInTurn.filter(colorId => currColorId !== colorId));
    }
    setTurns([...turns]);
  };

  useEffect(() => {
    if (isWin) {
      setTimeout(() => {
        navigation.navigate('Win');
      }, 1000);
    }
  }, [isWin]);

  const calculateResults = () => {
    setColorsInTurn([]);
    results[numOfTurn] = [];
    const objSecretCode = {
      a: secretCode[0],
      b: secretCode[1],
      c: secretCode[2],
      d: secretCode[3],
    };

    Object.keys(currentTurn).forEach(turnKey => {
      const found = Object.keys(objSecretCode).find(key => {
        return (
          currentTurn[turnKey]?.id !== undefined &&
          currentTurn[turnKey].id === objSecretCode[key]?.id
        );
      });

      if (found) {
        if (currentTurn[turnKey] === objSecretCode[turnKey]) {
          results[numOfTurn].push(Results.Bull);
        } else {
          results[numOfTurn].push(Results.Shot);
        }
      }
    });

    while (results[numOfTurn].length < 4) {
      results[numOfTurn].push(Results.Empty);
    }

    if (results[numOfTurn].every(res => res === Results.Bull)) {
      setWinning(true);
    }
    setNumOfTurn(numOfTurn - 1);
  };
  const generateRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    let temp = [];
    while (temp.length < 4) {
      const num = generateRandomInteger(0, 7);
      if (temp.every(color => color?.id !== num)) {
        temp.push(colors[num]);
      }
    }
    setSecretCode(temp);
    setTurns(arrayDeepClone(initialTurns));
    setResults([...initialResults]);
  }, []);

  useEffect(() => {
    if (numOfTurn < 0) {
      setWinning(true);
    }
  }, [numOfTurn]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <NavColors setChosenColor={setChosenColor} colors={colors} />
        <Board
          onPressBoard={onPressBoard}
          turns={turns}
          results={results}
          numOfTurn={numOfTurn}
          isShowSecretCode={isShowSecretCode}
          secretCode={secretCode}
          chosenColor={!!chosenColor}
        />
      </View>
      <View style={styles.finshTurnbutton}>
        <Button
          title="Make a move!"
          onPress={calculateResults}
          disabled={
            !currentTurn ||
            Object.values(currentTurn).filter(val => val !== null).length !== 4
          }
        />
      </View>
      <View style={styles.button}>
        <View style={{width: '30%'}}>
          <Button
            title="Show Me the secret"
            onPress={() => setShowSecretCode(!isShowSecretCode)}
            color="red"
          />
        </View>
        <View style={{width: '30%'}}>
          <Button
            title="Back to main menu"
            onPress={() => navigation.navigate('Menu')}
            color="green"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: '#22160B'},
  main: {
    justifyContent: 'space-between',
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  finshTurnbutton: {
    width: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Game;

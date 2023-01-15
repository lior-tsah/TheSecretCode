/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, View, Alert} from 'react-native';
import Board from '../components/Board';
import NavColors from '../components/NavColors';
import {
  initialTurns,
  initialResults,
  colors,
  Results,
  arrayDeepClone,
  winningURL,
  loseURL,
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
  const [isGameOver, setGameOver] = useState(false);
  const [results, setResults] = useState([...initialResults]);
  const urlToSend = useRef();
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
    if (isGameOver) {
      setTimeout(() => {
        navigation.navigate('Win', urlToSend.current);
      }, 1000);
    }
  }, [isGameOver]);

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
      urlToSend.current = winningURL;
      setGameOver(true);
    } else setNumOfTurn(numOfTurn - 1);
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

    colors.forEach(color => {
      color.isChosen = false;
    });

    setSecretCode(temp);
    setTurns(arrayDeepClone(initialTurns));
    setResults([...initialResults]);
  }, []);

  useEffect(() => {
    if (numOfTurn < 0) {
      urlToSend.current = loseURL;
      setGameOver(true);
    }
  }, [numOfTurn]);

  const showConfirmDialog = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to watch the secret code now?',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => setShowSecretCode(true),
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'No',
        },
      ],
    );
  };
  const onPressShowSecret = () => {
    if (isShowSecretCode) {
      setShowSecretCode(false);
    } else {
      showConfirmDialog();
    }
  };
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
            onPress={onPressShowSecret}
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

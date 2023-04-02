/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState, useContext} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Board from '../components/Board';
import NavColors from '../components/NavColors';
import {
  initialTurns,
  initialResults,
  colorsByLevels,
  Results,
  arrayDeepClone,
  winningURL,
  loseURL,
  language,
} from '../data';
import {useNavigation} from '@react-navigation/native';
import {SettingsContext} from '../SettingsContext';
import RegularButton from '../components/RegularButton';

const Game = props => {
  const navigation = useNavigation();
  const {currLanguage, level} = useContext(SettingsContext);
  const [chosenColor, setChosenColor] = useState();
  const [numOfTurn, setNumOfTurn] = useState(9);
  const [isShowSecretCode, setShowSecretCode] = useState(false);
  const [secretCode, setSecretCode] = useState([]);
  const [colorsInTurn, setColorsInTurn] = useState([]);
  const [turns, setTurns] = useState(arrayDeepClone(initialTurns));
  const [isGameOver, setGameOver] = useState(false);
  const [updatebySelect, setUpdatebySelect] = useState(false);

  const [results, setResults] = useState([...initialResults]);
  const urlToSend = useRef();
  const currentTurn = numOfTurn >= 0 ? turns[numOfTurn] : null;
  const colors = colorsByLevels[level];

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
      const num = generateRandomInteger(0, colors.length - 1);
      if (temp.every(color => color?.id !== num)) {
        temp.push(colors[num]);
      }
    }

    colors.forEach(color => {
      color.isChosen = false;
      color.isSelected = false;
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

  const showConfirmDialog = (title, details, onPress) => {
    return Alert.alert(title, details, [
      // The "Yes" button
      {
        text: language[currLanguage].yes,
        onPress: onPress,
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: language[currLanguage].no,
        style: 'destructive',
      },
    ]);
  };
  const onPressShowSecret = () => {
    if (isShowSecretCode) {
      setShowSecretCode(false);
    } else {
      showConfirmDialog(
        language[currLanguage].warningAlertTitle,
        language[currLanguage].warningAlertDetails,
        () => setShowSecretCode(true),
      );
    }
  };
  const onPressBackToTheMainMenu = () => {
    showConfirmDialog(
      language[currLanguage].warningAlertTitle,
      language[currLanguage].warningAlertBackDetails,
      () => navigation.navigate('Menu'),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <NavColors
          setChosenColor={setChosenColor}
          chosenColor={chosenColor}
          colors={colors}
          updatebySelect={updatebySelect}
          setUpdatebySelect={setUpdatebySelect}
        />
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

      <RegularButton
        width={'100%'}
        onPress={calculateResults}
        text={language[currLanguage].makeMoveBtn}
        color={'cyan'}
        disabled={
          !currentTurn ||
          Object.values(currentTurn).filter(val => val !== null).length !== 4
        }
        textColor={'#000'}
      />

      <View style={styles.button}>
        <RegularButton
          width={'35%'}
          onPress={onPressShowSecret}
          text={language[currLanguage].showSecretBtn}
          color={'red'}
          fontSize={16}
        />
        <RegularButton
          width={'35%'}
          onPress={onPressBackToTheMainMenu}
          text={language[currLanguage].backToMainMenuBtn}
          color={'green'}
          fontSize={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: '#00004f'},
  main: {
    justifyContent: 'space-between',
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Game;

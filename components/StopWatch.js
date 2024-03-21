import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const StopWatch = props => {
  const {loseFunc} = props;
  const [timer, setTimer] = useState(300);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
  };

  const resetTimer = () => {
    setTimer(0);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      resetTimer();
      loseFunc();
    }
  }, [timer]);

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `T I M E R :   ${minutes < 10 ? '0' + minutes : minutes} : ${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timer)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  timerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'yellow',
    fontFamily: 'cursive',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StopWatch;

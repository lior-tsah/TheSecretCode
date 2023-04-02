import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const RegularButton = props => {
  const {
    width,
    onPress,
    text,
    color,
    disabled = false,
    textColor = '#fff',
    fontSize = 24,
    height,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        width: width,
        height: height,
        margin: 5,
        borderRadius: 10,
        backgroundColor: disabled ? '#dddddd' : color,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: textColor,
      }}
      onPress={onPress}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: fontSize,
          color: textColor,
          padding: 5,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default RegularButton;

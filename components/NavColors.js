import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const NavColors = props => {
  const {setChosenColor, colors} = props;
  return (
    <View style={styles.navMenu}>
      {colors.map(color => (
        <TouchableOpacity
          key={color.id}
          style={[
            styles.ball,
            {
              backgroundColor: color.color,
              width: colors.length > 8 ? 45 : 50,
              height: colors.length > 8 ? 45 : 50,
            },
            color.isChosen && styles.chosen,
          ]}
          onPress={() => {
            colors.forEach(c => {
              c.isChosen = false;
            });
            color.isChosen = true;
            setChosenColor(color);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ball: {
    borderRadius: 100,
    borderColor: '#000',
    borderWidth: 1,
  },
  navMenu: {
    alignItems: 'flex-start',
    height: '90%',
    justifyContent: 'space-between',
    paddingLeft: 10,
    flex: 1,
  },
  chosen: {borderWidth: 5, borderColor: '#b5ff36'},
});

export default NavColors;

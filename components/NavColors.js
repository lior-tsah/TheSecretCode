import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {XURL} from '../data';
import Xbutton from './Xbutton';

const NavColors = props => {
  const {setChosenColor, colors, chosenColor, setUpdatebySelect, updatebySelect} = props;
  return (
    <View style={styles.navMenu}>
      {colors.map(color => (
        <View
          style={{flexDirection: 'row', justifyContent: 'center'}}
          key={color.id}>
          <TouchableOpacity
            style={[
              styles.ball,
              {
                backgroundColor: color.color,
                width: colors.length > 8 ? 45 : 50,
                height: colors.length > 8 ? 45 : 50,
              },
              color.isChosen && styles.chosen,
            ]}
            disabled={color.isSelected}
            onPress={() => {
              colors.forEach(c => {
                c.isChosen = false;
              });
              color.isChosen = true;
              setChosenColor(color);
            }}>
            {color.isSelected && <Xbutton size={10} />}
          </TouchableOpacity>

          <Xbutton
            size={20}
            onPress={() => {
              color.isSelected = !color.isSelected;
              color.isChosen = false;
              setUpdatebySelect(!updatebySelect);
            }}
          />
        </View>
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
  winning: {
    width: '100%',
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
});

export default NavColors;

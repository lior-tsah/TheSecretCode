import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Dropdown = props => {
  const {
    options,
    placeholder,
    backgroundColor,
    onSelectOption,
    textColor,
    height,
    width,
    renderDropdownIcon,
    dropdownIconPosition = 'left',
  } = props;

  const styles = StyleSheet.create({
    main: {
      height: height,
      backgroundColor: backgroundColor,
      width: width,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    dropdown: {
      backgroundColor: backgroundColor,
      width: 200,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
  });

  return (
    <SelectDropdown
      buttonStyle={styles.main}
      renderDropdownIcon={renderDropdownIcon}
      dropdownIconPosition={dropdownIconPosition}
      buttonTextStyle={{color: textColor}}
      rowTextStyle={{color: textColor}}
      dropdownStyle={styles.dropdown}
      data={options}
      defaultButtonText={placeholder}
  
      onSelect={onSelectOption}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem.label;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item.label;
      }}
    />
  );
};

export default Dropdown;

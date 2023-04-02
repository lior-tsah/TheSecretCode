import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';

const Dropdown = props => {
  const {options, placeholder, backgroundColor, onSelectOption, textColor} =
    props;

  return (
    <SelectDropdown
      buttonStyle={{
        height: 40,
        backgroundColor: backgroundColor,
        width: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      }}
      buttonTextStyle={{color: textColor}}
      rowTextStyle={{color: textColor}}
      dropdownStyle={{backgroundColor: backgroundColor}}
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

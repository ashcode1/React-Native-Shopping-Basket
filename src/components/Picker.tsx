import React, { useState, FC } from 'react';
import { Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SelectedColor } from '../interfaces';
import { lightGrey } from '../theme/colors';

interface Props {
  defaultValue: string;
  onChangeItem: (selectedColor: SelectedColor) => void;
}

const Picker: FC<Props> = (props) => {
  const { defaultValue, onChangeItem } = props;
  const {
    mainStyles,
    containerStyles,
    itemStyles,
    dropDownStyles,
    textStyles,
  } = styles;
  return (
    <>
      <Text style={textStyles}>Filter by colour:</Text>
      <DropDownPicker
        items={[
          { label: 'stone', value: 'Stone' },
          { label: 'black', value: 'Black' },
          { label: 'red', value: 'Red' },
          { label: 'none', value: 'None' },
        ]}
        defaultValue={defaultValue}
        containerStyle={containerStyles}
        style={mainStyles}
        itemStyle={itemStyles}
        dropDownStyle={dropDownStyles}
        onChangeItem={onChangeItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainStyles: {
    backgroundColor: lightGrey,
  },
  containerStyles: {
    height: 40,
    width: 95,
    marginLeft: 15,
  },
  itemStyles: {
    justifyContent: 'flex-start',
  },
  dropDownStyles: {
    backgroundColor: lightGrey,
  },
  textStyles: {
    marginLeft: 15,
    marginVertical: 5,
  },
});

export { Picker };

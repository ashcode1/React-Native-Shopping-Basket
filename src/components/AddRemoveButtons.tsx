import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SquareButton, TextButton } from './';

interface Props {
  quantity: number;
  addOnPress: () => void;
  subtractOnPress: () => void;
  removeAllOnPress: () => void;
}

const AddRemoveButtons: FC<Props> = (props) => {
  const { quantity, addOnPress, subtractOnPress, removeAllOnPress } = props;
  const { containerStyles, buttonsContainerStyles } = styles;
  return (
    <View style={containerStyles}>
      <View style={buttonsContainerStyles}>
        <SquareButton name="md-remove" onPress={subtractOnPress} />
        <Text>{quantity}</Text>
        <SquareButton name="md-add" onPress={addOnPress} />
      </View>
      <TextButton text="remove" onPress={removeAllOnPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    width: 95,
    marginLeft: 15,
    justifyContent: 'flex-end',
  },
  buttonsContainerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export { AddRemoveButtons };

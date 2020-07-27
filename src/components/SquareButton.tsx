import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from './';
import { black } from '../theme/colors';

interface Props {
  onPress: () => void;
  name: string;
}

const SquareButton: FC<Props> = (props) => {
  const { onPress, name } = props;
  const { containerStyles, iconStyles } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Icon name={name} style={iconStyles} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    width: 25,
    height: 25,
    backgroundColor: black,
  },
  iconStyles: {
    color: 'white',
  },
});

export { SquareButton };

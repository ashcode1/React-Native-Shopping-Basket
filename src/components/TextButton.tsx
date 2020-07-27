import React, { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  onPress: () => void;
  text: string;
}

const TextButton: FC<Props> = (props) => {
  const { onPress, text } = props;
  const { containerStyles } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    alignSelf: 'center',
  },
});

export { TextButton };

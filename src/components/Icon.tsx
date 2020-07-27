import React, { FC } from 'react';
import { Icon as NBIcon } from 'native-base';
import { StyleSheet, View } from 'react-native';

interface Props {
  name: string;
  style: object;
}

const Icon: FC<Props> = (props) => {
  const { name, style } = props;
  const { containerStyles, iconStyles } = styles;
  return (
    <View style={containerStyles}>
      <NBIcon name={name} style={[iconStyles, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 25,
  },
  iconStyles: {
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export { Icon };

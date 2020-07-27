import React, { FC } from 'react';
import { Spinner as NBSpinner } from 'native-base';
import { StyleSheet, Dimensions, View } from 'react-native';

const Spinner: FC = () => {
  const { containerStyles } = styles;
  return (
    <View style={containerStyles}>
      <NBSpinner color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
  },
});

export { Spinner };

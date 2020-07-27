import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { black, lightPink } from '../theme/colors';

interface Props {
  amount: number;
  basketItemsQuantity: number;
}

const TotalAmount: FC<Props> = (props) => {
  const { amount, basketItemsQuantity } = props;
  const {
    containerStyles,
    innerContainerStyles,
    boldTextStyles,
    textStyles,
    lineStyles,
  } = styles;
  return (
    <View style={containerStyles}>
      <View style={lineStyles} />
      <View style={innerContainerStyles}>
        <Text style={textStyles}>
          Basket total ({`${basketItemsQuantity} items`}):{' '}
        </Text>
        <Text style={boldTextStyles}>{`£${amount}`}</Text>
      </View>
      <View style={lineStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    backgroundColor: lightPink,
  },
  innerContainerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  boldTextStyles: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 15,
  },
  textStyles: {
    fontSize: 16,
    alignSelf: 'flex-end',
    marginLeft: 15,
  },
  lineStyles: {
    borderWidth: 1,
    borderColor: black,
  },
});

export { TotalAmount };

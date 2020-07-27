import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AddRemoveButtons } from './';
import { lightGrey } from '../theme/colors';

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  addOnPress: () => void;
  subtractOnPress: () => void;
  removeAllOnPress: () => void;
}

const ProductCard: FC<Props> = (props) => {
  const {
    image,
    name,
    price,
    quantity,
    addOnPress,
    subtractOnPress,
    removeAllOnPress,
  } = props;
  const {
    containerStyles,
    imageStyles,
    labelsContainerStyles,
    priceStyles,
    lineStyles,
  } = styles;
  return (
    <>
      <View style={containerStyles}>
        <Image
          resizeMode="contain"
          style={imageStyles}
          source={{
            uri: image,
          }}
        />
        <View style={labelsContainerStyles}>
          <Text>{name}</Text>
          <Text style={priceStyles}>{`£${price}`}</Text>
        </View>
        <AddRemoveButtons
          quantity={quantity}
          addOnPress={addOnPress}
          subtractOnPress={subtractOnPress}
          removeAllOnPress={removeAllOnPress}
        />
      </View>
      <View style={lineStyles} />
    </>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  imageStyles: {
    alignSelf: 'flex-start',
    marginRight: 15,
    height: 150,
    width: 95,
  },
  labelsContainerStyles: {
    flex: 1,
  },
  priceStyles: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  lineStyles: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: lightGrey,
  },
});

export { ProductCard };

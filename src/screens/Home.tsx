/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import axios from 'axios';
import React, { FC, useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { PRODUCTS_URL } from '../config';
import { ProductCard, Picker, TotalAmount, Spinner } from '../components';
import {
  removeItem,
  increment,
  decrement,
  sumTotals,
  sumQuantities,
  getQuantity,
  alert,
} from '../utils';
import { Item, SelectedColor } from '../interfaces';

interface PickerItem {
  value: string;
}

const Home: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<Item[]>([]);
  const [itemsToRender, setItemsToRender] = useState<Item[]>([]);
  const [basketItems, setBasketItems] = useState<Item[]>([]);
  const [pickerItem, setPickerItem] = useState<PickerItem>({
    value: 'None',
  });
  useEffect(() => {
    axios
      .get(PRODUCTS_URL)
      .then((response) => {
        console.log('RESPONSE: ', response.data);
        const newState = response.data.map((item: Item) => {
          return {
            ...item,
            quantity: 0,
          };
        });
        setItems(newState);
        setItemsToRender(newState);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert();
      });
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <StatusBar />
      <SafeAreaView>
        {items.length ? (
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Picker
              defaultValue={pickerItem.value}
              onChangeItem={(selectedColor: SelectedColor) => {
                setPickerItem({
                  value: selectedColor.value,
                });
                setItemsToRender(
                  selectedColor.value === 'None'
                    ? items
                    : items.filter((x) => x.colour === selectedColor.value),
                );
              }}
            />

            {itemsToRender.map((item: Item) => {
              return (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  quantity={getQuantity(basketItems, item.id)}
                  addOnPress={() => {
                    const newState = increment(basketItems, item);
                    setBasketItems(newState);
                  }}
                  subtractOnPress={() => {
                    const newState = decrement(basketItems, item);
                    setBasketItems(newState);
                  }}
                  removeAllOnPress={() => {
                    const newState = removeItem(basketItems, item.id);
                    setBasketItems(newState);
                  }}
                />
              );
            })}
            {items.length !== 0 ? (
              <TotalAmount
                amount={sumTotals(basketItems)}
                basketItemsQuantity={sumQuantities(basketItems)}
              />
            ) : null}
          </ScrollView>
        ) : null}
        {items.length === 0 ? (
          <TotalAmount
            amount={sumTotals(basketItems)}
            basketItemsQuantity={sumQuantities(basketItems)}
          />
        ) : null}
      </SafeAreaView>
    </>
  );
};

export default Home;

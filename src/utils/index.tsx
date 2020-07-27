import { Item } from '../interfaces';

export const removeItem = (basketItems: Item[], id: number): Item[] | [] => {
  let newState: Item[] = basketItems.filter((item: Item) => item.id !== id);

  return newState;
};

export const increment = (basketItems: Item[], item: Item): Item[] | [] => {
  const index: number = basketItems.findIndex((elem) => elem.id === item.id);
  let newState = [...basketItems];
  // if item obj already exists in basket, increment "quantity" value
  if (index !== -1) {
    newState[index].quantity = newState[index].quantity + 1;
  } else {
    // add whole item obj to basket
    const newItem: Item = { ...item };
    newItem.quantity = newItem.quantity + 1;
    newState = [...basketItems, newItem];
  }

  return newState;
};

export const decrement = (basketItems: Item[], item: Item): Item[] | [] => {
  const index: number = basketItems.findIndex((elem) => elem.id === item.id);
  let newState = [...basketItems];

  // if already at 0, don't subtract into negative int
  if (index === -1 || basketItems[index].quantity <= 1) {
    return removeItem(basketItems, item.id);
  } else {
    newState[index].quantity = newState[index].quantity - 1;
  }

  return newState;
};

// keep total amount tidy
export const convertToTwoDP = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const sumTotals = (basketItems: Item[]): number => {
  const total = basketItems.reduce(
    (acc, val) => (acc += val.price * val.quantity),
    0,
  );
  return Number(convertToTwoDP(total));
};

// total basket amount
export const sumQuantities = (basketItems: Item[]): number => {
  const total = basketItems.reduce((acc, val) => (acc += val.quantity), 0);
  return Number(convertToTwoDP(total));
};

// total number of line items
export const getQuantity = (basketItems: Item[], id: number): number => {
  const item = basketItems.find((elem) => elem.id === id);
  return item ? item.quantity : 0;
};

import {
  removeItem,
  increment,
  decrement,
  convertToTwoDP,
  sumTotals,
  sumQuantities,
  getQuantity,
  alert,
} from '../../utils';
import { Item } from '../../interfaces';

describe('Utils functions', () => {
  const item: Item = {
    id: 111,
    name: 'testName',
    img: 'testImg',
    colour: 'testColour',
    price: 1,
    quantity: 1,
  };
  const item2: Item = {
    id: 222,
    name: 'testName',
    img: 'testImg',
    colour: 'testColour',
    price: 2,
    quantity: 2,
  };
  const item3: Item = {
    id: 333,
    name: 'testName',
    img: 'testImg',
    colour: 'testColour',
    price: 3,
    quantity: 3,
  };
  const item4: Item = {
    id: 444,
    name: 'testName',
    img: 'testImg',
    colour: 'testColour',
    price: 4,
    quantity: 4,
  };
  const item0: Item = {
    id: 111,
    name: 'testName',
    img: 'testImg',
    colour: 'testColour',
    price: 1,
    quantity: 0,
  };
  const basketItems: Item[] = [item, item2, item3];

  describe('removeItem', () => {
    it('removes item from array by id', () => {
      expect(removeItem(basketItems, item.id)).toEqual([item2, item3]);
    });
  });

  describe('increment', () => {
    it('adds item to array and updates quantity property', () => {
      expect(increment(basketItems, item4)).toEqual([
        item,
        item2,
        item3,
        {
          id: 444,
          name: 'testName',
          img: 'testImg',
          colour: 'testColour',
          price: 4,
          quantity: 5,
        },
      ]);
    });
    it('it only updates quantity property if object already exists in array', () => {
      expect(increment(basketItems, item)).toEqual([
        {
          id: 111,
          name: 'testName',
          img: 'testImg',
          colour: 'testColour',
          price: 1,
          quantity: 2,
        },
        item2,
        item3,
      ]);
    });
  });

  describe('decrement', () => {
    it('if quantity of item in basket is less than or equal to 1, items gets removed', () => {
      expect(
        decrement(
          [
            {
              id: 111,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 1,
              quantity: 1,
            },
            {
              id: 222,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 2,
              quantity: 2,
            },
            {
              id: 333,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 3,
              quantity: 3,
            },
          ],
          item0,
        ),
      ).toEqual([item2, item3]);
    });
    it('by default, decrements quantity of existing item', () => {
      expect(
        decrement(
          [
            {
              id: 111,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 1,
              quantity: 2,
            },
            {
              id: 222,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 2,
              quantity: 2,
            },
            {
              id: 333,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 3,
              quantity: 3,
            },
          ],
          item,
        ),
      ).toEqual([
        {
          id: 111,
          name: 'testName',
          img: 'testImg',
          colour: 'testColour',
          price: 1,
          quantity: 1,
        },
        item2,
        item3,
      ]);
    });
  });

  describe('convertToTwoDP', () => {
    it('converts long trailing decimals number to 2 decimal places', () => {
      expect(convertToTwoDP(123.456789)).toBe('123.46');
    });
    it('converts no trailing decimals number to 2 decimal places', () => {
      expect(convertToTwoDP(123)).toBe('123.00');
    });
    it('converts one decimal place number to 2 decimal places', () => {
      expect(convertToTwoDP(123.4)).toBe('123.40');
    });
  });

  describe('sumTotals', () => {
    it('multiplies quantities by values and sums total', () => {
      expect(
        sumTotals([
          {
            id: 111,
            name: 'testName',
            img: 'testImg',
            colour: 'testColour',
            price: 1,
            quantity: 2,
          },
          {
            id: 222,
            name: 'testName',
            img: 'testImg',
            colour: 'testColour',
            price: 2,
            quantity: 2,
          },
          {
            id: 333,
            name: 'testName',
            img: 'testImg',
            colour: 'testColour',
            price: 3,
            quantity: 3,
          },
        ]),
      ).toBe(15);
    });
  });

  describe('sumQuantities', () => {
    it('accumulates only the quantities of items', () => {
      expect(
        sumQuantities([
          {
            id: 111,
            name: 'testName',
            img: 'testImg',
            colour: 'testColour',
            price: 1,
            quantity: 2,
          },
          {
            id: 222,
            name: 'testName',
            img: 'testImg',
            colour: 'testColour',
            price: 2,
            quantity: 2,
          },
          {
            id: 333,
            name: 'testName',
            img: 'testImg',
            colour: 'testColour',
            price: 3,
            quantity: 3,
          },
        ]),
      ).toBe(7);
    });
  });

  describe('getQuantity', () => {
    it('returns item quantity', () => {
      expect(
        getQuantity(
          [
            {
              id: 111,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 1,
              quantity: 1,
            },
            {
              id: 222,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 2,
              quantity: 2,
            },
          ],
          111,
        ),
      ).toBe(1);
    });
    it('returns 0 if item is not in basket', () => {
      expect(
        getQuantity(
          [
            {
              id: 222,
              name: 'testName',
              img: 'testImg',
              colour: 'testColour',
              price: 2,
              quantity: 2,
            },
          ],
          111,
        ),
      ).toBe(0);
    });
  });

  describe('alert', () => {
    it('gets called', () => {
      const mock_alert = jest.fn();

      jest.mock('react-native/Libraries/Alert/Alert.js', () => {
        return {
          alert: mock_alert,
        };
      });

      alert();
      expect(mock_alert).toHaveBeenCalled();
    });
  });
});

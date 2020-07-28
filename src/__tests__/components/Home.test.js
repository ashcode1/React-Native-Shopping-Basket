/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Home from '../../screens/Home';
import { Item } from '../../interfaces';
import { PRODUCTS_URL } from '../../config';
import * as utils from '../../utils';

jest.mock('axios');

describe('Home', () => {
  describe('Component without data', () => {
    it('renders with loading spinner before receiving data', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper.find('Spinner').length).toBe(1);
    });
  });

  describe('Component with data', () => {
    jest.useFakeTimers();

    let wrapper;
    let useEffect;

    const axiosSpy = jest.spyOn(axios, 'get');

    const mockUseEffect = () => {
      useEffect.mockImplementationOnce((f) => f());
    };

    beforeEach((done) => {
      useEffect = jest.spyOn(React, 'useEffect');

      mockUseEffect();

      const mockData = [
        {
          id: 1,
          name: 'testNameBlack',
          img: 'img',
          colour: 'Black',
          price: 11,
        },
        {
          id: 2,
          name: 'testNameRed',
          img: 'img',
          colour: 'Red',
          price: 22,
        },
        {
          id: 3,
          name: 'testNameBlackTwo',
          img: 'img',
          colour: 'Black',
          price: 33,
        },
        {
          id: 4,
          name: 'testNameStone',
          img: 'img',
          colour: 'Stone',
          price: 44,
        },
      ];

      const mockAxios = new MockAdapter(axios);
      mockAxios.onGet(PRODUCTS_URL).reply(200, mockData);
      wrapper = shallow(<Home />);
      setImmediate(() => {
        wrapper.update();
        done();
      });
    });

    it('renders the correct components', () => {
      expect(wrapper.find('Fragment').length).toBe(1);
      expect(wrapper.find('StatusBar').length).toBe(1);
      expect(wrapper.find('ForwardRef(SafeAreaView)').length).toBe(1);
      expect(wrapper.find('ScrollView').length).toBe(1);
      expect(wrapper.find('Picker').length).toBe(1);
      expect(wrapper.find('ProductCard').length).toBe(4);
      expect(wrapper.find('TotalAmount').length).toBe(1);
      expect(wrapper.find('Spinner').length).toBe(0);
    });

    it('makes api call via axios', async () => {
      expect(axiosSpy).toHaveBeenCalled();
    });

    it('setPickerItem - "none" renders original list of all products (length 4) ', () => {
      wrapper.find('Picker').props().onChangeItem({
        value: 'None',
      });
      expect(wrapper.find('ProductCard').length).toBe(4);
    });

    it('setPickerItem - "black" renders a filtered list of black products (length 2) ', () => {
      wrapper.find('Picker').props().onChangeItem({
        value: 'Black',
      });
      expect(wrapper.find('ProductCard').length).toBe(2);
      expect(wrapper.find('ProductCard').at(0).props().name).toBe(
        'testNameBlack',
      );
      expect(wrapper.find('ProductCard').at(1).props().name).toBe(
        'testNameBlackTwo',
      );
    });

    it('setPickerItem - "red" renders a filtered list of red products (length 1) ', () => {
      wrapper.find('Picker').props().onChangeItem({
        value: 'Red',
      });
      expect(wrapper.find('ProductCard').length).toBe(1);
      expect(wrapper.find('ProductCard').props().name).toBe('testNameRed');
    });

    it('setPickerItem - "stone" renders a filtered list of stone products (length 1) ', () => {
      wrapper.find('Picker').props().onChangeItem({
        value: 'Stone',
      });
      expect(wrapper.find('ProductCard').length).toBe(1);
      expect(wrapper.find('ProductCard').props().name).toBe('testNameStone');
    });

    it('pressing + and - buttons on each item increments and decrements the quantity of each associated line item', () => {
      // quantities before pressing buttons:

      expect(wrapper.find('ProductCard').at(0).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(1).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(2).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(3).props().quantity).toBe(0);

      // press + on each

      wrapper.find('ProductCard').at(0).props().addOnPress();
      wrapper.find('ProductCard').at(1).props().addOnPress();
      wrapper.find('ProductCard').at(2).props().addOnPress();
      wrapper.find('ProductCard').at(3).props().addOnPress();

      // quantities after pressing + each line item:

      expect(wrapper.find('ProductCard').at(0).props().quantity).toBe(1);
      expect(wrapper.find('ProductCard').at(1).props().quantity).toBe(1);
      expect(wrapper.find('ProductCard').at(2).props().quantity).toBe(1);
      expect(wrapper.find('ProductCard').at(3).props().quantity).toBe(1);

      // press - on each

      wrapper.find('ProductCard').at(0).props().subtractOnPress();
      wrapper.find('ProductCard').at(1).props().subtractOnPress();
      wrapper.find('ProductCard').at(2).props().subtractOnPress();
      wrapper.find('ProductCard').at(3).props().subtractOnPress();

      // quantities after pressing - each line item:

      expect(wrapper.find('ProductCard').at(0).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(1).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(2).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(3).props().quantity).toBe(0);
    });

    it('pressing "remove" button sets item quantity to 0', () => {
      // quantities before pressing "remove":

      expect(wrapper.find('ProductCard').at(0).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(1).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(2).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(3).props().quantity).toBe(0);

      // add varying quantities

      wrapper.find('ProductCard').at(0).props().addOnPress();
      wrapper.find('ProductCard').at(1).props().addOnPress();
      wrapper.find('ProductCard').at(1).props().addOnPress();
      wrapper.find('ProductCard').at(2).props().addOnPress();
      wrapper.find('ProductCard').at(2).props().addOnPress();
      wrapper.find('ProductCard').at(2).props().addOnPress();
      wrapper.find('ProductCard').at(3).props().addOnPress();
      wrapper.find('ProductCard').at(3).props().addOnPress();
      wrapper.find('ProductCard').at(3).props().addOnPress();
      wrapper.find('ProductCard').at(3).props().addOnPress();

      // quantities after pressing + on each in varying quantities

      expect(wrapper.find('ProductCard').at(0).props().quantity).toBe(1);
      expect(wrapper.find('ProductCard').at(1).props().quantity).toBe(2);
      expect(wrapper.find('ProductCard').at(2).props().quantity).toBe(3);
      expect(wrapper.find('ProductCard').at(3).props().quantity).toBe(4);

      // press "remove" on each

      wrapper.find('ProductCard').at(0).props().removeAllOnPress();
      wrapper.find('ProductCard').at(1).props().removeAllOnPress();
      wrapper.find('ProductCard').at(2).props().removeAllOnPress();
      wrapper.find('ProductCard').at(3).props().removeAllOnPress();

      // quantities after pressing - each line item:

      expect(wrapper.find('ProductCard').at(0).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(1).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(2).props().quantity).toBe(0);
      expect(wrapper.find('ProductCard').at(3).props().quantity).toBe(0);
    });
  });
});

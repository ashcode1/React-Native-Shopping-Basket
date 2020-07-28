import React from 'react';
import { shallow } from 'enzyme';
import { TotalAmount } from 'src/components';

describe('TotalAmount', () => {
  const testAmount: number = 2;
  const testBasketItemsQuantity: number = 4;
  const wrapper = shallow(
    <TotalAmount
      amount={testAmount}
      basketItemsQuantity={testBasketItemsQuantity}
    />,
  );

  it('renders correct components', () => {
    expect(wrapper.find('View').length).toBe(4);
    expect(wrapper.find('Text').length).toBe(2);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { ProductCard } from 'src/components';

describe('ProductCard', () => {
  const testId: number = 123;
  const testName: string = 'testName';
  const testPrice: number = 10;
  const testImage: string = 'image';
  const testQuantity: number = 2;
  const testAddOnPress: () => void = jest.fn;
  const testSubtractOnPress: () => void = jest.fn;
  const testRemoveAllOnPress: () => void = jest.fn;
  const wrapper = shallow(
    <ProductCard
      id={testId}
      name={testName}
      price={testPrice}
      image={testImage}
      quantity={testQuantity}
      addOnPress={testAddOnPress}
      subtractOnPress={testSubtractOnPress}
      removeAllOnPress={testRemoveAllOnPress}
    />,
  );

  it('renders correct components', () => {
    expect(wrapper.find('View').length).toBe(3);
    expect(wrapper.find('Image').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(2);
  });
});

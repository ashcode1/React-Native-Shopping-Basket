import React from 'react';
import { shallow } from 'enzyme';
import { AddRemoveButtons } from 'src/components';

describe('AddRemoveButtons', () => {
  const testQuantity: number = 123;
  const testOnPress: () => void = jest.fn();
  const wrapper = shallow(
    <AddRemoveButtons
      quantity={testQuantity}
      addOnPress={testOnPress}
      subtractOnPress={testOnPress}
      removeAllOnPress={testOnPress}
    />,
  );
  it('renders correct components', () => {
    expect(wrapper.find('View').length).toBe(2);
    expect(wrapper.find('Text').length).toBe(1);
    expect(wrapper.find('TextButton').length).toBe(1);
  });
  it('square buttons - onPress calls function', () => {
    const squareButtons = wrapper.find('SquareButton');
    squareButtons.forEach((item) => {
      const onPress: () => void = item.prop('onPress');
      onPress();
    });
    expect(testOnPress).toHaveBeenCalledTimes(2);
  });
  it('text button - onPress calls function', () => {
    const onPress: () => void = wrapper.find('TextButton').prop('onPress');
    onPress();
    expect(testOnPress).toBeCalled();
    expect(testOnPress).toBeCalled();
  });
});

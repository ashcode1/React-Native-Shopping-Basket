import React from 'react';
import { shallow } from 'enzyme';
import { Picker } from 'src/components';

describe('Picker', () => {
  const testDefaultValue = 'defaultValue';
  const testOnChangeItem = jest.fn();
  const wrapper = shallow(
    <Picker defaultValue={testDefaultValue} onChangeItem={testOnChangeItem} />,
  );

  it('renders correct components', () => {
    expect(wrapper.find('Text').length).toBe(1);
    expect(wrapper.find('DropDownPicker').length).toBe(1);
  });
  it('onChangeItem calls function', () => {
    const onChangeItem: () => void = wrapper
      .find('DropDownPicker')
      .prop('onChangeItem');
    onChangeItem();
    expect(testOnChangeItem).toBeCalled();
  });
});

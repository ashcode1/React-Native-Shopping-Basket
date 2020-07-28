import React from 'react';
import { shallow } from 'enzyme';
import { TextButton } from 'src/components';

describe('TextButton', () => {
  jest.mock(
    'react-native/Libraries/Components/Touchable/TouchableOpacity',
    () => 'TouchableOpacity',
  );
  const testOnPress: () => void = jest.fn();
  const testText: string = 'testText';
  const wrapper = shallow(<TextButton onPress={testOnPress} text={testText} />);

  it('renders correct components', () => {
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(1);
  });
  it('onPress calls function', () => {
    const onPress: () => void = wrapper
      .find('TouchableOpacity')
      .prop('onPress');
    onPress();
    expect(testOnPress).toBeCalled();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { SquareButton } from 'src/components';

describe('SquareButton', () => {
  jest.mock(
    'react-native/Libraries/Components/Touchable/TouchableOpacity',
    () => 'TouchableOpacity',
  );
  const testOnPress: () => void = jest.fn();
  const testName: string = 'testName';

  interface Props {
    onPress: () => void;
    name: string;
  }

  const wrapper = shallow<Props>(
    <SquareButton onPress={testOnPress} name={testName} />,
  );
  it('renders correct components', () => {
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(1);
  });
  it('onPress calls function', () => {
    const onPress: () => void = wrapper
      .find('TouchableOpacity')
      .prop('onPress');
    onPress();
    expect(testOnPress).toBeCalled();
  });
});

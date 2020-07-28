import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from 'src/components';

describe('Icon', () => {
  const testName = 'testName';
  const testStyle = {};
  const wrapper = shallow(<Icon name={testName} style={testStyle} />);
  it('renders correct components', () => {
    expect(wrapper.find('View').length).toBe(1);
    expect(wrapper.find('Styled(Icon)').length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from 'src/components';

describe('Spinner', () => {
  const wrapper = shallow(<Spinner />);

  it('renders correct components', () => {
    expect(wrapper.find('View').length).toBe(1);
    expect(wrapper.find('Styled(Spinner)').length).toBe(1);
  });
});

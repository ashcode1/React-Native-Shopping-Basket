import React from 'react';
import { shallow } from 'enzyme';
import App from '../../app/App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders correct components', () => {
    expect(wrapper.find('Home').length).toBe(1);
  });
});

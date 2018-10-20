import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/Authentication/LoginPage';

test('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});
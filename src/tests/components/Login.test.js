import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call start login on button click', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={onClick}/>);
  wrapper.find('button').simulate('click');
  expect(onClick).toHaveBeenCalled();
});
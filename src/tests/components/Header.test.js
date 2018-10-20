import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();

  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe("Expensify");
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call start logout on button click', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Header startLogout={onClick}/>);
  wrapper.find('button').simulate('click');
  expect(onClick).toHaveBeenCalled();
});
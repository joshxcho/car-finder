import React from 'react';
import { shallow } from 'enzyme';
import Vehicle from '../components/Vehicle.jsx';

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
copyProps(window, global);

describe('<Vehicle />', () => {
  const vehicle = {
    Year: '2018',
    Make: 'Audi',
    Model: 'RS3',
  };
  it('renders Vehicle component', () => {
    const wrapper = shallow(<Vehicle vehicle={vehicle} />);
    wrapper;
    expect(wrapper.find('.vehicle-wrapper')).toHaveLength(1);
  });

  it('runs toggleModal', () => {
    const wrapper = shallow(<Vehicle vehicle={vehicle} />);
    expect(wrapper.instance().toggleModal());
  });
});

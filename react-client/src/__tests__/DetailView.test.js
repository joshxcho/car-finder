import React from 'react';
import { shallow } from 'enzyme';
import DetailView from '../components/DetailView.jsx';

describe('<DetailView />', () => {
  it('renders DetailView component', () => {
    const vehicle = {
      Year: '2018',
      Make: 'Audi',
      Model: 'RS3',
    };
    const wrapper = shallow(<DetailView vehicle={vehicle} />);
    wrapper;
    expect(wrapper.find('.container-detail-view')).toHaveLength(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../components/SearchBar.jsx';

describe('<SearchBar />', () => {
  it('renders SearchBar component', () => {
    const wrapper = shallow(<SearchBar />);
    wrapper;
    expect(wrapper.find('.search-bar')).toHaveLength(1);
  });

  it('echoes user text', () => {
    const wrapper = shallow(<SearchBar search={() => {}} />);

    wrapper.find('input').simulate('change', {
      target: { value: 'audi' },
    });
    expect(wrapper.find('input').props().value).toEqual('audi');
  });
});

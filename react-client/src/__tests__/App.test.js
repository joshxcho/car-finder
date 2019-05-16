import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';
import Header from '../components/Header.jsx';
import VehicleList from '../components/VehicleList.jsx';
import SearchBar from '../components/SearchBar.jsx';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders 1 <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders 1 <SearchBar /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });

  it('renders 1 <VehicleList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(VehicleList)).toHaveLength(1);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows the correct number of vehicles in the state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('cars')).toHaveLength(238);
  });

  it('is able to execute filterCars', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().filterCars());
  });
});

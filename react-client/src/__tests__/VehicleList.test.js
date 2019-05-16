import React from 'react';
import { shallow } from 'enzyme';
import VehicleList from '../components/VehicleList.jsx';

describe('<VehicleList />', () => {
  const vehicles = [
    {
      Year: '2018',
      Make: 'Cadillac',
      Model: 'CT6',
      Styling: '6',
      Acceleration: '4',
      Handling: '5',
      'Fun Factor': '4',
      'Cool Factor': '4',
      'Weekend Score Total': '23',
      Features: '9',
      Comfort: '8',
      Quality: '8',
      Practicality: '5',
      Value: '7',
      'Daily Score Total': '37',
      'Total Score': '60',
      'Video Link': '23:47',
      'Filmed At City': 'Tustin',
      'Filmed At Country': 'California',
      'Vehicle Country': 'USA',
      id: 117,
    },
    {
      Year: '2018',
      Make: 'Bugatti',
      Model: 'Chiron',
      Styling: '9',
      Acceleration: '10',
      Handling: '9',
      'Fun Factor': '10',
      'Cool Factor': '10',
      'Weekend Score Total': '48',
      Features: '6',
      Comfort: '5',
      Quality: '7',
      Practicality: '1',
      Value: '6',
      'Daily Score Total': '25',
      'Total Score': '73',
      'Video Link': '35:06',
      'Filmed At City': 'Toronto',
      'Filmed At Country': 'Ontario',
      'Vehicle Country': 'France',
      id: 1,
    },
  ];

  it('renders VehicleList component', () => {
    const wrapper = shallow(<VehicleList vehicles={vehicles} />);
    wrapper;
    expect(wrapper.find('.vehicle-list')).toHaveLength(1);
  });
});

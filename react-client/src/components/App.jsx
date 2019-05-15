import React, { Component } from 'react';
import VehicleList from './VehicleList.jsx';

import vehicles from '../../../vehicle-data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };

    this.displayCars = this.displayCars.bind(this);
  }

  componentDidMount() {
    this.displayCars();
  }

  displayCars() {
    this.setState({ cars: vehicles });
  }

  render() {
    const { cars } = this.state;
    return (
      <div>
        <VehicleList vehicles={cars} />
      </div>
    );
  }
}

export default App;

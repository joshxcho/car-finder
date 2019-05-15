import React, { Component } from 'react';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import VehicleList from './VehicleList.jsx';

import vehicles from '../../../vehicle-data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };

    this.displayCars = this.displayCars.bind(this);
    this.filterCars = this.filterCars.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.displayCars();
  }

  displayCars() {
    this.setState({ cars: vehicles });
  }

  filterCars(term) {
    const searchResults = [];

    for (const vehicle of vehicles) {
      if (vehicle.Year.toLowerCase().includes(term)) {
        searchResults.push(vehicle);
      } else if (vehicle.Make.toLowerCase().includes(term)) {
        searchResults.push(vehicle);
      } else if (vehicle.Model.toLowerCase().includes(term)) {
        searchResults.push(vehicle);
      }
    }
    return searchResults;
  }

  handleSearch(term) {
    const results = this.filterCars(term);

    term.length > 0 ? this.setState({ cars: results }) : this.setState({ cars: vehicles });
  }

  render() {
    const { cars } = this.state;
    return (
      <div>
        <Header vehicles={cars} />
        <SearchBar search={this.handleSearch} />
        <VehicleList vehicles={cars} />
      </div>
    );
  }
}

export default App;

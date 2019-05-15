import React from 'react';
import Vehicle from './Vehicle.jsx';

const VehicleList = ({ vehicles }) => (
  <div className="vehicle-list">
    {vehicles.map(vehicle => (
      <Vehicle key={vehicle.id} vehicle={vehicle} />
    ))}
  </div>
);

export default VehicleList;

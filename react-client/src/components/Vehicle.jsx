import React from 'react';

const Vehicle = ({ vehicle }) => (
  <div>
    <div className="vehicle-wrapper">
      <div className="vehicle-detail">
        {vehicle.Year}
      </div>
      <div className="vehicle-detail">
        {vehicle.Make}
      </div>
      <div className="vehicle-detail">
        {vehicle.Model}
      </div>
    </div>
  </div>
);

export default Vehicle;

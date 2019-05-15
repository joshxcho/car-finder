import React from 'react';

const Header = ({ vehicles }) => (
  <div className="header">
    {vehicles.length}
    {' '}
AVAILABLE VEHICLES
  </div>
);

export default Header;

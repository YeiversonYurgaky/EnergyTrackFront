import React from 'react';
import ConsumptionList from '../Components/ConsumptionList';
import NavDashboard from '../Components/NavDashboard';

const NavbarPage = () => {
  return (
    <div className="bg-white h-screen">
      <NavDashboard />
      <ConsumptionList />
    </div>
  );
};

export default NavbarPage;

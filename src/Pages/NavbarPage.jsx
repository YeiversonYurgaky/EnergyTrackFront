import React from 'react';
import ConsumptionList from '../Components/ConsumptionList';
import NavDashboard from '../Components/NavDashboard';

const NavbarPage = () => {
  return (
    <div className="bg-[#d3f5ff] h-screen">
      <NavDashboard />
      <ConsumptionList />
    </div>
  );
};

export default NavbarPage;

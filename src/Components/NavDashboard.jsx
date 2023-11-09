import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/NavDasboard.css';
import logo from '../assets/logo.png';
import usericon from '../assets/userIcon.png';

const UserDropdown = () => {
  const usuario = localStorage.getItem('user');
  return (
    <div className="flex items-center">
      <label className="text-white font-semibold ">{usuario}</label>
      <NavDropdown
        title={<img src={usericon} alt="user poto" className="w-11 h-11" />}
      >
        <NavDropdown.Item href="http://89.116.25.43:3271/">
          Cerrar sesión
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

const NavDashboard = () => {
  return (
    <Navbar className="bg-indigo-800 h-[100px]">
      <img
        src={logo}
        alt="Logo"
        className="p-1 h-[150px] w-[150px] ml-2 cursor-pointer"
      />
      <Nav className="ms-auto">
        <UserDropdown />
      </Nav>
    </Navbar>
  );
};

export default NavDashboard;

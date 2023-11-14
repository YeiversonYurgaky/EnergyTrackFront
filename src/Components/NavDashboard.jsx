import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import '../Styles/NavDasboard.css';
import logo from '../assets/logo.png';
import usericon from '../assets/userIcon.png';

const UserDropdown = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Elimina el token del localStorage cuando cerrar sesión
    localStorage.removeItem('token');

    // lo mando al home al cerrar sesion
    navigate('/');
  };

  useEffect(() => {
    // mira si al un token en el localstorage que esta seteado en el login
    const token = localStorage.getItem('token');

    if (!token) {
      // Si no hay un token, me manda al login
      navigate('/login');
    }
  }, [navigate]);

  const usuario = localStorage.getItem('user');
  return (
    <div className="flex items-center">
      <label className="text-white font-semibold ">{usuario}</label>
      <NavDropdown
        title={<img src={usericon} alt="user poto" className="w-11 h-11" />}
      >
        <NavDropdown.Item>
          <button className="text-red" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

const NavDashboard = () => {
  return (
    <Navbar className="bg-[#1c4355] h-[100px] flex gap-[20rem]">
      <img
        src={logo}
        alt="Logo"
        className="p-1h-[142px] w-[142px] ml-2 cursor-pointer"
      />
      <h1 className="text-white text-4xl font-bold">Tabla de consumos</h1>
      <Nav className="ms-auto">
        <UserDropdown />
      </Nav>
    </Navbar>
  );
};

export default NavDashboard;

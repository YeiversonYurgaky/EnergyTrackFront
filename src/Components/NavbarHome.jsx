import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavbarHome = () => {
  const navigate = useNavigate();

  const irHome = () => {
    navigate('/');
  };
  const irAbout = () => {
    navigate('/about');
  };
  const irConstact = () => {
    navigate('/contact');
  };

  return (
    <nav className="bg-[#1c4355] h-[100px] flex justify-between items-center">
      <picture className="flex items-center">
        <img
          className="p-1 h-[150px] w-[150px] ml-2 cursor-pointer"
          src={logo}
          alt="logo"
        />
      </picture>
      <div className="flex items-center">
        <div
          onClick={irHome}
          className="text-white hover:underline hover:decoration-[3px] mx-4 text-xl cursor-pointer font-semibold"
        >
          Home
        </div>
        <div
          onClick={irAbout}
          className="text-white hover:underline hover:decoration-[3px] mx-4 text-xl cursor-pointer font-semibold"
        >
          Acerca de Nosotros
        </div>
        <div
          onClick={irConstact}
          className="text-white hover:underline hover:decoration-[3px] mx-4 text-xl cursor-pointer font-semibold"
        >
          Contáctanos
        </div>
        <Link
          to="/login"
          className="bg-[#9df0ff] hover:bg-[#9df0ff] cursor-pointer transition-transform duration-300 ease-in hover:brightness-110 hover:scale-110 hover:shadow-md text-[#1c4355] font-bold py-2 px-4 ml-3 rounded hover:shadow-[#9df0ff]"
        >
          Iniciar sesión
        </Link>

        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-500 transition-transform duration-300 ease-in hover:brightness-110 hover:scale-110 hover:shadow-md text-white font-bold py-2 px-4 ml-3 mr-3 rounded hover:shadow-green-500"
        >
          Registrarse
        </Link>
      </div>
    </nav>
  );
};

export default NavbarHome;

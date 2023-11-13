import React from 'react';
import CarruselHomePage from '../Components/CarruselHomePage';
import HomePage from '../Components/HomePage';
import NavbarHome from '../Components/NavbarHome';
import '../Styles/HomePage.css';

const Home = () => {
  return (
    <div className="bg-color">
      <NavbarHome />
      <CarruselHomePage />
      <HomePage />
    </div>
  );
};

export default Home;

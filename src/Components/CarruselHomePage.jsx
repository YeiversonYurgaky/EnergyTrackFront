import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Carrusel.css';
import img1 from '../assets/carrusel1.jpg';
import img3 from '../assets/carrusel2.avif';
import img2 from '../assets/carrusel3.jpg';

const CarruselHomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={4000}>
        <img className="SlidesPics w-screen" src={img2} alt="carrusel imagen" />
        <Carousel.Caption>
          <h3 className="slideName text-black">
            ¿Quieres controlar el consumo energético de tus iluminarias y
            ahorrar energía?
          </h3>
          <p className="slideText text-black">
            Con EnergyTrack, podrás hacerlo usando nuestro sistema avanzado de
            monitoreo en tiempo real.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className="SlidesPics w-screen" src={img1} alt="carrusel imagen" />
        <Carousel.Caption>
          <h3 className="slideName">
            ¿Quieres reducir tu huella de carbono y contribuir al medio
            ambiente?
          </h3>
          <p className="slideText">
            Con EnergyTrack, puedes contribuir a un futuro más sostenible
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="SlidesPics w-screen h-[700px]"
          src={img3}
          alt="carrusel imagen"
        />
        <Carousel.Caption>
          <h3 className="slideName">¿Quieres ahorrar costes en tu empresa?</h3>
          <p className="slideText">
            EnergyTrack también te ayuda a optimizar el rendimiento de tus
            instalaciones, para que consuman menos energía y duren más.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarruselHomePage;

import React, { useEffect, useState } from 'react';
import img1 from '../assets/carruimg1.avif';
import img2 from '../assets/carruimg2.webp';
import img3 from '../assets/carruimg3.jpg';

import NavbarHome from './NavbarHome';

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % 3); // 3 es el número total de imágenes en el carrusel
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <main className="bg-white text-black min-h-screen">
      <header>
        <NavbarHome />
      </header>
      <div className="p-4 flex items-center">
        <div className="flex flex-col gap-3 w-2/3 pr-8">
          <h1 className="text-6xl font-bold">Bienvenido a EnergyTrack</h1>
          <p className="text-lg font-semibold">
            El ahorro de energía es crucial para reducir la huella ambiental y
            promover la sostenibilidad a largo plazo. Al implementar prácticas
            eficientes en la gestión de iluminación, podemos impactar
            significativamente la conservación de recursos y la reducción de
            costos.
          </p>
          <p className="text-lg font-semibold">
            Nuestro sistema inteligente de seguimiento de consumo energético
            proporciona una solución integral para monitorear y optimizar el uso
            de la iluminación en entornos universitarios.
          </p>
          <p className="text-lg font-semibold">
            EnergyTrack se compromete a facilitar la transición hacia prácticas
            energéticas sostenibles, fomentando un entorno educativo más
            respetuoso con el medio ambiente y económicamente eficiente.
          </p>
        </div>
        <div className="w-1/3 shadow-lg">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className={
                  slideIndex === 0 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <img src={img1} className="d-block w-100" alt="imagen1" />
              </div>
              <div
                className={
                  slideIndex === 1 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <img src={img2} className="d-block w-100" alt="imagen2" />
              </div>
              <div
                className={
                  slideIndex === 2 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <img src={img3} className="d-block w-100" alt="imagen3" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={handlePrev}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={handleNext}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

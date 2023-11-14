import React from 'react';
import '../Styles/HomePage.css';
import aboutus from '../assets/aboutus.svg';
import NavbarHome from './NavbarHome';

const HomeAbout = () => {
  return (
    <main className="bg-color text-black h-screen">
      <header className="mb-4">
        <NavbarHome />
      </header>
      <article className="p-4 flex justify-center">
        <section className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-6xl font-bold mb-4 text-center">
              Acerca de Nosotros
            </h2>
            <p className="text-lg  mb-2">
              Nuestro objetivo es promover prácticas sostenibles y eficientes
              para un futuro energético más verde.
            </p>
            <p className="text-lg  mb-2">
              Con nuestra plataforma, puedes visualizar y analizar datos
              detallados sobre el consumo de iluminación en tiempo real.
              Ofrecemos herramientas poderosas para ayudarte a tomar decisiones
              informadas y optimizar el uso de energía en tu entorno educativo.
            </p>
            <p className="text-lg">
              ¡Únete a nosotros en esta misión de hacer del mundo un lugar más
              ecológico y eficiente energéticamente!
            </p>
          </div>
          <div className="md:w-1/2">
            <picture>
              <img
                src={aboutus}
                alt="about us"
                className="w-full rounded-lg h-[450px]"
              />
            </picture>
          </div>
        </section>
      </article>
    </main>
  );
};

export default HomeAbout;

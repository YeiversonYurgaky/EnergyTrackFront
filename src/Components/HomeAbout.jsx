import React from 'react';
import '../Styles/HomePage.css';
import NavbarHome from './NavbarHome';

const HomeAbout = () => {
  return (
    <main className="bg-color text-[#0e2e3e] h-screen">
      <header className="mb-4">
        <NavbarHome />
      </header>
      <article className="p-8 flex container justify-center flex-col">
        <section className="flex justify-center gap-3 flex-col">
          <h2 className="text-6xl font-bold text-center">Acerca de Nosotros</h2>
          <p className="text-lg">
            Bienvenido a EnergyTrack, una solución innovadora para monitorear y
            gestionar el consumo de energía en edificios universitarios. Nuestro
            objetivo es promover prácticas sostenibles y eficientes para un
            futuro energético más verde.
          </p>
          <p className="text-lg">
            Con nuestra plataforma, puedes visualizar y analizar datos
            detallados sobre el consumo de iluminación en tiempo real. Ofrecemos
            herramientas poderosas para ayudarte a tomar decisiones informadas y
            optimizar el uso de energía en tu entorno educativo.
          </p>
          <p className="text-lg">
            ¡Únete a nosotros en esta misión de hacer del mundo un lugar más
            ecológico y eficiente energéticamente!
          </p>
        </section>
      </article>
    </main>
  );
};

export default HomeAbout;

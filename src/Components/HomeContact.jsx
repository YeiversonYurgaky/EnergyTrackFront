import React from 'react';
import '../Styles/HomePage.css';
import contacus from '../assets/contact us.svg';
import NavbarHome from './NavbarHome';

const HomeContact = () => {
  return (
    <main className="bg-color text-black h-screen">
      <header>
        <NavbarHome />;
      </header>
      <article className="p-4 flex justify-center">
        <section className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-6xl font-bold mb-4 text-center">Contacto</h2>
            <p className="text-lg mb-2">
              ¡Estamos encantados de saber de ti! Si tienes alguna pregunta,
              comentario o simplemente quieres saber más sobre nuestros
              servicios, no dudes en ponerte en contacto con nosotros.
            </p>
            <p className="text-lg mb-2">
              Puedes encontrarnos en la siguiente dirección:
              <br />
              EnergyTrack, 123 Calle Principal, Ciudad Universitaria, País
            </p>
            <p className="text-lg mb-2">
              Para consultas generales, escríbenos a: info@energytrack.com
            </p>
            <p className="text-lg mb-2">
              Para asistencia técnica, contáctanos en: support@energytrack.com
            </p>
            <p className="text-lg">
              También puedes llamarnos al: +1-123-456-7890
            </p>
          </div>
          <div className="md:w-1/2">
            <picture>
              <img
                src={contacus}
                alt="imagen de contacto"
                className="w-full h-[450px] rounded-lg"
              />
            </picture>
          </div>
        </section>
      </article>
    </main>
  );
};

export default HomeContact;

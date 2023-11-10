import React from 'react';
import NavbarHome from './NavbarHome';

const HomeContact = () => {
  return (
    <main className="bg-[#d3f5ff] text-black h-screen">
      <header>
        <NavbarHome />;
      </header>
      <article className="p-8 flex justify-center flex-col">
        <section className="flex justify-center gap-3 flex-col">
          <h2 className="text-6xl font-bold text-center">Contacto</h2>
          <p className="text-lg font-semibold">
            ¡Estamos encantados de saber de ti! Si tienes alguna pregunta,
            comentario o simplemente quieres saber más sobre nuestros servicios,
            no dudes en ponerte en contacto con nosotros.
          </p>
          <p className="text-lg font-semibold">
            Puedes encontrarnos en la siguiente dirección:
            <br />
            EnergyTrack, 123 Calle Principal, Ciudad Universitaria, País
          </p>
          <p className="text-lg font-semibold">
            Para consultas generales, escríbenos a: info@energytrack.com
          </p>
          <p className="text-lg font-semibold">
            Para asistencia técnica, contáctanos en: support@energytrack.com
          </p>
          <p className="text-lg font-semibold">
            También puedes llamarnos al: +1-123-456-7890
          </p>
        </section>
      </article>
    </main>
  );
};

export default HomeContact;

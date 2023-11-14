import React, { useEffect, useState } from 'react';
import ahorro from '../assets/ahorro.jpg';
import sensor from '../assets/sensor.jpg';
import tiposSensor from '../assets/tiposSensor.jpeg';
import ArticlesCards from './ArticlesCards';
const HomePage = () => {
  const [coloredText, setColoredText] = useState([]);

  useEffect(() => {
    const text =
      '¡Ilumina el camino hacia un futuro más sostenible con nosotros!';
    const colors = ['text-green-700', 'text-[#EBBD01]', 'text-blue-800'];

    const interval = setInterval(() => {
      setColoredText(
        text.split('').map((char, index) => (
          <span key={index} className={colors[index % colors.length]}>
            {char}
          </span>
        ))
      );
      colors.push(colors.shift());
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className=" text-black">
      <header className="mt-10 flex gap-5 flex-col">
        <h1 className="flex  text-5xl justify-center font-bold">
          ¡Bienvenido a EnergyTrack!
        </h1>
        <p className="container text-xl text-center">
          ¡Bienvenido a nuestro innovador sistema de gestión de consumos
          energéticos!
        </p>
        <p className="container text-xl text-center">
          Descubre cómo nuestras soluciones avanzadas revolucionan la eficiencia
          lumínica, proporcionando un control preciso y análisis detallado para
          optimizar el uso de la energía en iluminación.
        </p>
        <p className="container text-xl font-bold text-center">{coloredText}</p>
      </header>
      <h2 className="flex text-5xl justify-center p-10 font-bold">
        Articulos Relacionados
      </h2>
      <section className="flex justify-center pb-10">
        <article className="flex gap-5">
          <ArticlesCards
            image={sensor}
            imagealt={'sensor de movimiento'}
            title={'Ahorra energía con los sensores de movimiento'}
            text={
              'Los sensores de movimiento pueden ayudarte a ahorrar en tu factura sin que tengas que hacer nada...'
            }
            buttonText={'Leer más'}
            irArticle={
              'https://www.endesa.com/es/la-cara-e/eficiencia-energetica/Ahorro-sensores-movimiento'
            }
          />

          <ArticlesCards
            image={ahorro}
            imagealt={'ahorro de energia'}
            title={
              'Beneficios del ahorro energético: ¿por qué es importante ahorrar energía?'
            }
            text={
              'Si pensamos como usuarios, está claro que ahorrar energía significa pagar menos...'
            }
            buttonText={'Leer más'}
            irArticle={
              'https://thenergia.com/beneficios-de-ahorrar-energia-electrica-por-que-es-importante-ahorrar-energia/'
            }
          />

          <ArticlesCards
            image={tiposSensor}
            imagealt={'sensor de movimiento'}
            title={
              'Los mejores sensores de movimiento para ahorrar en la factura de la luz'
            }
            text={
              'Te aconsejamos instalar uno de los sensores de movimiento si estás buscando ahorrar...'
            }
            buttonText={'Leer más'}
            irArticle={
              'https://www.elconfidencial.com/decompras/gadgets/2022-02-14/factura-luz-sensores-movimiento-ahorro_3312863/'
            }
          />
        </article>
      </section>
    </main>
  );
};

export default HomePage;

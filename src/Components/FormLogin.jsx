import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Constantes from '../../utils/Constantes';
import '../Styles/Login.css';
import BackButton from './BackButton';
import ButtonLogin from './ButtonLogin';
import ButtonRegister from './ButtonRegister';

const FormLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const handleToggleMostrarContraseña = () => {
    setMostrarContraseña(!mostrarContraseña);
  };

  const navigate = useNavigate();
  const irRegistrar = () => {
    navigate('/register');
  };
  const irHome = () => {
    navigate('/');
  };
  const irPassword = () => {
    navigate('/forgotpassword');
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();
    const endPoint = Constantes.URL_BASE + '/usuarios/login';

    const data = {
      usuario: usuario,
      password: contraseña,
    };

    await axios
      .post(endPoint, data)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('user', data.usuario);
        Swal.fire('Información!', 'Has Ingresado Exitosamente!', 'success');

        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response.status === 400 ||
          error.response.status === 404 ||
          error.response.status === 401
        ) {
          Swal.fire('Informacion!', error.response.data.message, 'error');
        } else {
          Swal.fire('Informacion!', 'Ocurrio un error', 'error');
        }
      });
  };

  return (
    <main className="main">
      <div className="contenedor">
        <section className="form-container">
          <div className="mensajeBienvenida">
            <h1>Energy Track</h1>
            <p>
              ¡Bienvenidos a <span>Energy Track</span> la plataforma inteligente
              para visualizar y analizar los consumos diarios de iluminación en
              el Bolivar Rave!
            </p>
            <p>
              Encontraras informacion actualizada para potenciar la eficiencia
              energetica de nuestra universidad. Unete a nosotros en este
              emocionante recorrido hacia un campus mas sostenible.
            </p>
            <p>¡Nos complace mucho contar contigo!</p>
          </div>
          <form className="form-signin">
            <div className="flex relative left-[180px] bottom-4">
              <BackButton fnIrAlLogin={irHome} />
            </div>
            <h1>Ingresar</h1>
            <div className="contain-inputs">
              <div className="mb-3">
                <input
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                  type="text"
                  placeholder="Usuario"
                />
              </div>
              <div>
                {mostrarContraseña ? (
                  <input
                    type="text"
                    id="password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                  />
                ) : (
                  <input
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                  />
                )}
                <button
                  type="button"
                  className="text-xs text-gray-500 mt-1 no-underline flex hover:text-[#1c4355]"
                  onClick={handleToggleMostrarContraseña}
                >
                  {mostrarContraseña ? 'Ocultar' : 'Mostrar'} Contraseña
                </button>
              </div>
              <a
                className="password-recover mt-3 cursor-pointer"
                onClick={irPassword}
              >
                Recuperar contraseña
              </a>
            </div>
            <ButtonLogin fnIniciarSesion={iniciarSesion} label={'Ingresar'} />
            <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <ButtonRegister fnRegistarse={irRegistrar} label={'Registrarse'} />
          </form>
        </section>
      </div>
    </main>
  );
};

export default FormLogin;

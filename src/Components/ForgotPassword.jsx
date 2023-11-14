import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Constantes from '../../utils/Constantes';
import forgotPass from '../assets/forgotpass.svg';
import BackButton from './BackButton';
import ButtonResetPassword from './ButtonResetPassword';

const ForgotPassword = () => {
  const [stateUsuario, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const irLogin = () => {
    navigate('/');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (stateUsuario === '' || password === '' || confirmPassword === '') {
      Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
    } else if (password === confirmPassword) {
      const endPoint = Constantes.URL_BASE + '/usuarios/updatePassword/';

      const data = {
        usuario: stateUsuario,
        password: password,
      };

      axios
        .put(endPoint + stateUsuario, data)
        .then((resp) => {
          Swal.fire(
            'Información',
            'Contraseña actualizada con éxito',
            'success'
          );
          navigate('/login');
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400 || error.response.status === 404) {
            Swal.fire('Informacion!', error.response.data.message, 'error');
          } else {
            Swal.fire('Informacion!', error.response.data.message, 'error');
          }
        });
    } else {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    }
  };

  return (
    <main className="flex justify-center bg-[#52cef5]">
      <div className="flex items-center h-screen justify-center">
        <section className="flex w-[800px] h-[500px] bg-white border-none rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-center relative flex-1">
            <img
              className="w-96 h-auto flex justify-center items-center absolute top-16 left-20"
              src={forgotPass}
              alt="forgotPass"
            />
          </div>
          <form className="flex items-center p-2 justify-evenly flex-col flex-1 bg-white">
            <div className="relative left-[175px] top-[-25px] z-auto">
              <BackButton fnIrAlLogin={irLogin} />
            </div>
            <h1 className="text-4xl text-center flex justify-center items-center text-[#1c4355] font-bold uppercase">
              Recuperar Contraseña
            </h1>
            <div className="flex justify-evenly flex-col items-end">
              <div className=" flex flex-col gap-3 mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="text"
                  placeholder="Usuario"
                  value={stateUsuario}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="password"
                  placeholder="Nueva contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <ButtonResetPassword
              fnCambiarContraseña={handleChangePassword}
              label={'Cambiar contraseña'}
            />
          </form>
        </section>
      </div>
    </main>
  );
};

export default ForgotPassword;

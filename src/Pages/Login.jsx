import React from 'react';
import FormLogin from '../Components/FormLogin';

const Login = ({ handleLoginBackend }) => {
  return (
    <div>
      <FormLogin handleLoginBackend={handleLoginBackend} />
    </div>
  );
};

export default Login;

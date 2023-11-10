import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AcercaNosotros from './Pages/AcercaNosotros';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavbarPage from './Pages/NavbarPage';
import PageNotFound from './Pages/PageNotFound';
import RecoverPassword from './Pages/RecoverPassword';
import Register from './Pages/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función de inicio de sesión que proviene de tu backend
  const handleLoginBackend = (data) => {
    // Aquí, data representa la información de inicio de sesión recibida del backend
    setIsLoggedIn(data.isLoggedIn); // Ajusta según tu implementación
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AcercaNosotros />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/login"
        element={<Login handleLoginBackend={handleLoginBackend} />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<RecoverPassword />} />
      {isLoggedIn ? (
        <Route path="/dashboard" element={<NavbarPage />} />
      ) : (
        <Route path="/dashboard" element={<Navigate to="/" />} />
      )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

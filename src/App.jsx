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

  const handleLoginBackend = (data) => {
    // Verifica la respuesta del backend y actualiza isLoggedIn en consecuencia
    if (data.isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
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

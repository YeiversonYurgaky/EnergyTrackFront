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
  // Simula la función de autenticación
  const isAuthenticated = () => {
    // Aquí deberías verificar si el usuario está autenticado.
    // Por ejemplo, podrías verificar si hay un token en el localStorage.
    return localStorage.getItem('isUserAuthenticated') === 'true';
  };

  // Componente de ruta protegida
  const ProtectedRoute = ({ element }) => {
    if (!isAuthenticated()) {
      // Redirigir al usuario al login si no está autenticado
      return <Navigate to="/login" replace />;
    }

    return element;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AcercaNosotros />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<RecoverPassword />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<NavbarPage />} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

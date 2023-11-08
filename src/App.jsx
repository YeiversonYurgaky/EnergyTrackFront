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
  // Verificar si el usuario está autenticado
  const isAuthenticated = () => {
    return localStorage.getItem('isUserAuthenticated') === 'true';
  };

  // Componente de ruta protegida
  const ProtectedRoute = ({ element }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" replace />;
    }

    return element;
  };

  // Lógica de inicio de sesión
  const handleLogin = () => {
    // Procesar el inicio de sesión
    // Por ejemplo, después de verificar las credenciales, establecer el estado de autenticación en verdadero
    localStorage.setItem('isUserAuthenticated', 'true');
  };

  // Lógica de cierre de sesión
  const handleLogout = () => {
    // Procesar el cierre de sesión
    // Por ejemplo, después de cerrar sesión, eliminar el estado de autenticación
    localStorage.removeItem('isUserAuthenticated');
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AcercaNosotros />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<RecoverPassword />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute element={<NavbarPage onLogout={handleLogout} />} />
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

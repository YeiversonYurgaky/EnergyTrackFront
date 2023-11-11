import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsumptionList from '../Components/ConsumptionList';
import NavDashboard from '../Components/NavDashboard';

const NavbarPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay un token en el localStorage al cargar el componente
    const token = localStorage.getItem('token');

    if (!token) {
      // Si no hay un token, redirigir a la página de inicio de sesión
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div className="bg-[#eefbfd] h-screen">
      <NavDashboard />
      <ConsumptionList />
    </div>
  );
};

export default NavbarPage;

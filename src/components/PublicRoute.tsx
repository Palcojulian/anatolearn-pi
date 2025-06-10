import { Navigate, Outlet } from 'react-router';
import { useAuthUser } from '../pages/log-in/composables/useAuthUser';

const PublicRoute = () => {
  const { userLooged } = useAuthUser();
  return userLooged ? <Navigate to="/mi-perfil" replace /> : <Outlet />;
};

export default PublicRoute;

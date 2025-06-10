import { Navigate, Outlet } from "react-router";
import { useAuthUser } from "../pages/log-in/composables/useAuthUser";

const ProtectedRoute = () => {
  const { userLooged } = useAuthUser();
  return userLooged ? <Outlet /> : <Navigate to="/iniciar-sesion" replace />;
};

export default ProtectedRoute;

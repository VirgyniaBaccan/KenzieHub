import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { userInfos } = useContext(UserContext);
  return userInfos ? <Outlet /> : <Navigate to="/" />;
};

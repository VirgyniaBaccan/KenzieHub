import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  // protege rotas para garantir que logado acesse algumas páginas e não logado outras
  const { userInfos } = useContext(UserContext);
  // se o user for verdadeiro, vou exibir elemento da rota filho, do contrário quero navegar para.. nesse caso início
  return userInfos ? <Outlet /> : <Navigate to="/" />;
};

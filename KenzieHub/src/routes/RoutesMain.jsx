import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <TechProvider>
              <Dashboard />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};

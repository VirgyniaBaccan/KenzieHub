import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useState } from "react";

export const RoutesMain = () => {
  const [userInfos, setUserInfos] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUserInfos={setUserInfos} />} />
      <Route path="/dashboard" element={<Dashboard userInfos={userInfos} />} />
      <Route path="/registerpage" element={<RegisterPage />} />
    </Routes>
  );
};

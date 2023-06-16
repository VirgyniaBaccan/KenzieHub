import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useState } from "react";
// import { api } from "../services/api";

export const RoutesMain = () => {
  const [userInfos, setUserInfos] = useState([]);

  // useEffect(() => {
  //   const loadUser = async () => {
  //     try {
  //       const { data } = await api.get("/users");
  //       setUserInfos(data);
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   };
  //   loadUser();
  // }, []);

  // console.log(userInfos)

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUserInfos={setUserInfos} />} />
      <Route path="/dashboard" element={<Dashboard userInfos={userInfos} />} />
      <Route path="/registerpage" element={<RegisterPage />} />
    </Routes>
  );
};

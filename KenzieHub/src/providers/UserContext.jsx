import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
//lado de fora da fç componente
export const UserContext = createContext({});
//vazio pois ao longo preencheremos

//provider é um componente
export const UserProvider = ({ children }) => {
  const [userInfos, setUserInfos] = useState(null);
  const currentPath = window.location.pathname;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const loadUserInfos = async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfos(data);
        // navigate("/dashboard");
        navigate(currentPath);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("USERID");
      } finally {
        setIsLoading(false);
      }
    };
    if (token) {
      loadUserInfos();
    }
  }, []);

  const navigate = useNavigate();

  const createUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      toast.success("Conta criada com sucesso", {
        autoClose: 900,
        className: "toast__message",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Ops, algo deu errado!", {
        autoClose: 900,
        className: "toast__message",
      });
    }
  };

  const userLogin = async (formData, setIsLoading) => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUserInfos(data.user);

      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("USERID", data.user.id);

      toast.success("Login realizado com sucesso", {
        autoClose: 900,
        className: "toast__message",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("E-mail ou senha inválidos", {
        autoClose: 900,
        className: "toast__message",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("USERID");
    setUserInfos(null);
  };

  // useEffect(() => {
  //   console.log(userInfos);
  // }, [userInfos]);

  return (
    //age como um exportador de variáveis, funções, estados etc;
    <UserContext.Provider
      value={{ userInfos, userLogin, createUser, userLogout, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

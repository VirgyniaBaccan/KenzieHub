// import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ setUserInfos }) => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      // console.log(data);
      // console.log(data.user);

      // setUserInfos((userInfos) => [...userInfos, data.user]);
      setUserInfos(data.user);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (formData) => {
    await userLogin(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <label>Digite aqui seu email</label>
      <input type="email" {...register("email")} />
      <label>Digite aqui sua senha</label>
      <input type="password" {...register("password")} />
      <button>Entrar</button>
      <p>Ainda não possui uma conta?</p>
      <button>Cadastre-se</button>
    </form>
  );
};

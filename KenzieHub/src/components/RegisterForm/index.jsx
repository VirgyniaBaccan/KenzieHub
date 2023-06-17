import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const createUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      // console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (formData) => {
    await createUser(formData);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <label>Nome</label>
        <input
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
        />
        {errors.name?.message}
        <label>Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
        />
        {errors.email?.message}
        <label>Senha</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        {errors.password?.message}
        <label>Confirmar senha</label>
        <input
          type="password"
          {...register("confirm")}
          placeholder="Digite novamente sua senha"
        />
        {errors.confirm?.message}
        <label>Bio</label>
        <input type="text" {...register("bio")} placeholder="Fale sobre você" />
        {errors.bio?.message}
        <label>Contato</label>
        <input
          type="text"
          {...register("contact")}
          placeholder="Opção de contato"
        />
        {errors.contact?.message}
        <label>Selecionar módulo</label>
        <select {...register("course_module")}>
          <option>Selecione</option>
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
        {errors.course_module?.message}
        <button>Cadastrar</button>
      </form>
    </>
  );
};

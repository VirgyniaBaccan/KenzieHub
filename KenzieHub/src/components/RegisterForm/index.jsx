import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../StyledButton";
import { StyledForm } from "./styles";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { createUser } = useContext(UserContext);

  const submit = async (formData) => {
    console.log(formData)
    await createUser(formData);
    reset();
  };

  return (
    <>
      <ToastContainer />
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <div>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <label>Nome</label>
        <StyledInput
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
        />
        <span>{errors.name?.message}</span>
        <label>Email</label>
        <StyledInput
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
        />
        <span>{errors.email?.message}</span>
        <label>Senha</label>
        <StyledInput
          type="password"
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        <span>{errors.password?.message}</span>
        <label>Confirmar senha</label>
        <StyledInput
          type="password"
          {...register("confirm")}
          placeholder="Digite novamente sua senha"
        />
        <span>{errors.confirm?.message}</span>
        <label>Bio</label>
        <StyledInput
          type="text"
          {...register("bio")}
          placeholder="Fale sobre você"
        />
        <span>{errors.bio?.message}</span>
        <label>Contato</label>
        <StyledInput
          type="text"
          {...register("contact")}
          placeholder="Opção de contato"
        />
        <span>{errors.contact?.message}</span>
        <label>Selecionar módulo</label>
        <select {...register("course_module")}>
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
        <span>{errors.course_module?.message}</span>
        <StyledButton>Cadastrar</StyledButton>
      </StyledForm>
    </>
  );
};

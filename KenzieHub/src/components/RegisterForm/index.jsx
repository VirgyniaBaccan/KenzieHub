import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../StyledButton";
import { StyledForm } from "./styles";

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
      toast.success("Conta criada com sucesso", { autoClose: 900 });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Ops, algo deu errado!", { autoClose: 900 });
    }
  };

  const submit = async (formData) => {
    await createUser(formData);
    reset();
  };

  return (
    <>
      <ToastContainer />
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <label>Nome</label>
        <StyledInput
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
        />
        {errors.name?.message}
        <label>Email</label>
        <StyledInput
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
        />
        {errors.email?.message}
        <label>Senha</label>
        <StyledInput
          type="password"
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        {errors.password?.message}
        <label>Confirmar senha</label>
        <StyledInput
          type="password"
          {...register("confirm")}
          placeholder="Digite novamente sua senha"
        />
        {errors.confirm?.message}
        <label>Bio</label>
        <StyledInput
          type="text"
          {...register("bio")}
          placeholder="Fale sobre você"
        />
        {errors.bio?.message}
        <label>Contato</label>
        <StyledInput
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
        <StyledButton>Cadastrar</StyledButton>
      </StyledForm>
    </>
  );
};

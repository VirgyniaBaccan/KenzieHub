import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../StyledButton";
import { TechModal } from "../Modal";
import { StyledLink } from "../../pages/RegisterPage/styles";

export const CreateTechForm = () => {
  const { register, handleSubmit } = useForm();

  const { createTech } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Cadastrar tecnologia</h2>
      <StyledInput type="text" placeholder="Título" {...register("title")} />
      <select placeholder="Status" {...register("status")}>
        <option>Iniciante</option>
        <option>Intermediário</option>
        <option>Avançado</option>
      </select>
      <StyledButton type="submit">Criar tecnologia</StyledButton>
    </form>
  );
};

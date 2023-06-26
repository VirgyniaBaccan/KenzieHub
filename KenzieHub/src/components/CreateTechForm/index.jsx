import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../StyledButton";

export const CreateTechForm = () => {
  const { register, handleSubmit } = useForm();

  const { createTech } = useContext(TechContext);

  const submit = (formData) => {
    // const data = { formData };
    createTech(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
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

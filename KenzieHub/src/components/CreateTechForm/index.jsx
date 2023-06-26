import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../StyledButton";

export const CreateTechForm = () => {
  const { register, handleSubmit } = useForm();

  const { createTech, setIsCreateOpen } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Cadastrar tecnologia</h2>
      <p onClick={() => setIsCreateOpen(false)}>X</p>
      <label>Nome</label>
      <StyledInput type="text" placeholder="Título" {...register("title")} />
      <label>Selecionar status</label>
      <select placeholder="Status" {...register("status")}>
        <option>Iniciante</option>
        <option>Intermediário</option>
        <option>Avançado</option>
      </select>
      <StyledButton type="submit">Criar tecnologia</StyledButton>
    </form>
  );
};

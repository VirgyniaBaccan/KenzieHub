import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../StyledButton";
import { StyledForm } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechSchema } from "./createTechSchema";

export const CreateTechForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTechSchema),
  });

  const { createTech, setIsCreateOpen } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div className="div__title">
        <h2>Cadastrar tecnologia</h2>
        <button className="buttonX" onClick={() => setIsCreateOpen(false)}>
          X
        </button>
      </div>
      <div className="div__form-content">
        <label>Nome</label>
        <StyledInput type="text" placeholder="Título" {...register("title")} />
        <span>{errors.title?.message}</span>
        <label>Selecionar status</label>
        <select
          className="form__select"
          placeholder="Status"
          {...register("status")}
        >
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <StyledButton type="submit">Cadastrar tecnologia</StyledButton>
      </div>
    </StyledForm>
  );
};

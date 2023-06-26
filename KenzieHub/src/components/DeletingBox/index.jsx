import { useForm } from "react-hook-form";
import { StyledModalBox, StyledModalOverlay } from "./styles";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { StyledInput } from "../StyledInput";

export const DeletingBox = ({ children, updateCallback, deleteCallback, tech }) => {
  const { register, handleSubmit } = useForm();

  const { updateTech} = useContext(TechContext);
// console.log(tech)
  const submit = (formData) => {
    updateTech(tech.id, formData);
  };

  return (
    <StyledModalOverlay role="dialog">
      <StyledModalBox>
        {children}
        <form onSubmit={handleSubmit(submit)}>
          <StyledInput
            type="text"
            placeholder="Título"
            defaultValue="tecnologia" disabled
          />
          <select placeholder="Status" {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
        </form>
        <button onClick={updateCallback}>Salvar alterações</button>
        <button onClick={deleteCallback}>Excluir</button>
      </StyledModalBox>
    </StyledModalOverlay>
  );
};

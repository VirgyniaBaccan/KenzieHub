import { useForm } from "react-hook-form";
import { StyledModalBox, StyledModalOverlay } from "./styles";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { StyledInput } from "../StyledInput";

export const ChangingBox = ({
  children,
  updateCallback,
  deleteCallback,
  tech,
}) => {
  // const { register, handleSubmit } = useForm({defaultValues: {status: tech.status}});

  const { updateTech, setIsChanging } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    updateTech(tech.id, formData);
  };

  return (
    <StyledModalOverlay role="dialog">
      <StyledModalBox>
        {children}
        <h2>Tecnologia detalhes</h2>
        <button onClick={() => setIsChanging(null)}>X</button>
        <form onSubmit={handleSubmit(updateCallback)}>
          <StyledInput
            type="text"
            placeholder="Título"
            defaultValue="Tecnologia"
            disabled
          />
          <select placeholder="status" {...register("status")}>
            <option value={"Iniciante"}>Iniciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </select>
          <button type="submit">Salvar alterações</button>
        </form>
        <button type="button" onClick={deleteCallback}>
          Excluir
        </button>
      </StyledModalBox>
    </StyledModalOverlay>
  );
};

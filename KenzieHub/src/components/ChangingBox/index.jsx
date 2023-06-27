import { useForm } from "react-hook-form";
import { StyledModalBox, StyledModalOverlay } from "./styles";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { StyledInput } from "../StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { StyledLink } from "../../components/StyledLink";

export const ChangingBox = ({ children, updateCallback, deleteCallback }) => {
  const { setIsChanging, isChanging } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  return (
    <StyledModalOverlay role="dialog">
      <StyledModalBox>
        {children}
        <div className="div__title">
          <h2>Tecnologia detalhes</h2>
          <button className="buttonX" onClick={() => setIsChanging(null)}>
            X
          </button>
        </div>
        <form
          className="div__form-content"
          onSubmit={handleSubmit(updateCallback)}
        >
          <StyledInput
            type="text"
            placeholder="Título"
            defaultValue={isChanging.title}
            disabled
          />
          <select
            className="form__select"
            placeholder="status"
            {...register("status")}
            defaultValue={isChanging.status}
          >
            <option value={"Iniciante"}>Iniciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </select>
        </form>
        <div className="div__buttons">
          <StyledButton className="button__save" type="submit">
            Salvar alterações
          </StyledButton>
          <StyledLink type="button" onClick={deleteCallback}>
            Excluir
          </StyledLink>
        </div>
      </StyledModalBox>
    </StyledModalOverlay>
  );
};

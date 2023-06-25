import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

export const CreateTechForm = () => {
  const { register, handleSubmit } = useForm;
  const { userInfos } = useContext(UserContext);
  const { createTech } = useContext(TechContext);

  const submit = (FormData) => {
    const data = { ...FormData, author: userInfos.name };
    createTech(data)
  };

  return (
    <form>
      <Input placeholder="Título" {...register("title")} />
      <select placeholder="Status" {...register("status")}>
        <option>Iniciante</option>
        <option>Intermediário</option>
        <option>Avançado</option>
      </select>
      <button type="submit">Criar tecnologia</button>
    </form>
  );
};

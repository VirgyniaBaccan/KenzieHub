import logo from "../../assets/Logo-KenzieHub.svg";
import { StyledLink } from "../RegisterPage/styles";
import { StyledContainer, StyledHeader } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechModal } from "../../components/Modal";
import { TechContext } from "../../providers/TechContext";
import { DeletingBox } from "../../components/DeletingBox";

export const Dashboard = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { userInfos, userLogout } = useContext(UserContext);
  const { techList, deleteTech, updateTech } = useContext(TechContext);
  const [isDeleting, setIsDeleting] = useState(null);

  return (
    <>
      <StyledHeader>
        <div className="header__container">
          <img src={logo} alt="Logotipo KenzieHub" />
          <StyledLink onClick={userLogout} to="/">
            Sair
          </StyledLink>
        </div>
      </StyledHeader>
      <StyledContainer>
        <div className="div__user-container">
          <div className="div__user">
            <h2>Olá, {userInfos.name}</h2>
            <h3>{userInfos.course_module}</h3>
          </div>
        </div>
        <div>
          <h2>Tecnologias</h2>
          <StyledLink onClick={() => setIsCreateOpen(!isCreateOpen)}>
            {isCreateOpen ? "Fechar" : "+"}
          </StyledLink>
          {isCreateOpen ? <TechModal /> : null}
          {isDeleting ? (
            <DeletingBox
              updateCallback={async (formData) => {
                await updateTech(tech.id, formData), setIsDeleting(null);
              }}
              deleteCallback={async () => {
                await deleteTech(isDeleting.id), setIsDeleting(null);
              }}
            >
              <p>Tem certeza que deseja excluir essa notícia?</p>
            </DeletingBox>
          ) : null}
          {techList.map((tech) => (
            <li key={tech.id} onClick={() => setIsDeleting(tech)}>
              <h3>{tech.title}</h3>
              <p>{tech.status}</p>
              {/* <button onClick={() => deleteTech(tech.id)}>Excluir</button> */}
              {/* <button onClick={() => setIsDeleting(tech)}>Excluir</button> */}
            </li>
          ))}
        </div>
      </StyledContainer>
    </>
  );
};

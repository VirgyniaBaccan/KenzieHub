// import { Link } from "react-router-dom";
import logo from "../../assets/Logo-KenzieHub.svg";
import { StyledLink } from "../RegisterPage/styles";
import { StyledContainer, StyledHeader } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
// import { TechContext } from "../../providers/TechContext";
import { CreateTechForm } from "../../components/CreateTechForm";

export const Dashboard = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { userInfos, userLogout } = useContext(UserContext);
  // const { createTech } = useContext(TechContext);

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
        <button onClick={() => setIsCreateOpen(!isCreateOpen)}>
          {isCreateOpen ? "Fechar" : "Criar Tecnologias"}
        </button>
        {isCreateOpen ? <CreateTechForm /> : null}
      </StyledContainer>
    </>
  );
};

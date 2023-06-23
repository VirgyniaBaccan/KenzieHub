// import { Link } from "react-router-dom";
import logo from "../../assets/Logo-KenzieHub.svg";
import { StyledLink } from "../RegisterPage/styles";
import { StyledContainer, StyledHeader } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {
  const { userInfos, userLogout } = useContext(UserContext);

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
        <div className="div__infos">
          <h2>Que pena! Estamos em desenvolvimento :/</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </StyledContainer>
    </>
  );
};

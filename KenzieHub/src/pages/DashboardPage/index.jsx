import logo from "../../assets/Logo-KenzieHub.svg";
import { StyledLink } from "../RegisterPage/styles";
import {
  StyledContainer,
  StyledHeader,
  StyledList,
  StyledTechDiv,
} from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechModal } from "../../components/Modal";
import { TechContext } from "../../providers/TechContext";
import { ChangingBox } from "../../components/ChangingBox";

export const Dashboard = () => {
  // const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { userInfos, userLogout } = useContext(UserContext);
  const {
    techList,
    deleteTech,
    updateTech,
    isCreateOpen,
    setIsCreateOpen,
    setIsChanging,
    isChanging,
  } = useContext(TechContext);
  // const [isChanging, setIsChanging] = useState(null);

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
        <div className="div__techs">
          <StyledTechDiv>
            <h2>Tecnologias</h2>
            <p onClick={() => setIsCreateOpen(true)}>+</p>
          </StyledTechDiv>
          {isCreateOpen ? <TechModal /> : null}
          {isChanging ? (
            <ChangingBox
              updateCallback={async (formData) => {
                await updateTech(isChanging.id, formData), setIsChanging(null);
              }}
              deleteCallback={async () => {
                await deleteTech(isChanging.id), setIsChanging(null);
              }}
            ></ChangingBox>
          ) : null}
          <StyledList>
            {techList.map((tech) => (
              <li key={tech.id} onClick={() => setIsChanging(tech)}>
                <h3 className="title__tech">{tech.title}</h3>
                <p className="status__tech">{tech.status}</p>
              </li>
            ))}
          </StyledList>
        </div>
      </StyledContainer>
    </>
  );
};

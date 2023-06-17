import { Link } from "react-router-dom";
import logo from "../../assets/Logo-KenzieHub.svg";

export const Dashboard = ({ userInfos }) => {
  const userLogout = () => {
    localStorage.clear("TOKEN", "USERID");
  };

  return (
    <>
      <header>
        <img src={logo} alt="Logotipo KenzieHub" />
        <nav>
          <Link onClick={userLogout} to="/">
            Sair
          </Link>
        </nav>
      </header>
      <div>
        <h2>{userInfos.name}</h2>
        <h3>{userInfos.course_module}</h3>
      </div>
      <div>
        <h2>Que pena! Estamos em desenvolvimento :/</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </>
  );
};

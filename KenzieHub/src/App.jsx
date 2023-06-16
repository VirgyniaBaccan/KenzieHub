import { RoutesMain } from "./routes/RoutesMain";
import { Link } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { GlobalReset } from "./styles/reset";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalReset />
      <header>
        <nav>
          {/* ancora para rotas do react router dom. mais performático, não tem carregamento */}
          {/* para rotas intenas, utilizarei link. Para redirecionamentos, utiliza-se âncora padrão */}
          <Link to="/dashboard">User</Link>
          <Link to="/">Login</Link>
          <Link to="/registerpage">Cadastro</Link>
        </nav>
      </header>
      <RoutesMain />
      {/* Se estou numa rota x no navegador, exibo componente x */}
    </div>
  );
}

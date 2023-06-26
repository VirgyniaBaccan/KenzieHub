import { useContext, useState } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { GlobalReset } from "./styles/reset";
import { UserContext } from "./providers/UserContext";
import { TechModal } from "./components/Modal";

export const App = () => {
  const { isLoading } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalReset />
      <button onClick={() => setIsOpen(true)}>Abrir o modal</button>
      {isOpen ? <TechModal setIsOpen={setIsOpen}>Exemplo</TechModal> : null}
      {isLoading ? <p>Carregando...</p> : <RoutesMain />}
    </div>
  );
};

import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { GlobalReset } from "./styles/reset";
import { UserContext } from "./providers/UserContext";

export const App = () => {
  const { isLoading } = useContext(UserContext);
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalReset />
      {isLoading ? <p>Carregando...</p> : <RoutesMain />}
    </div>
  );
};
  
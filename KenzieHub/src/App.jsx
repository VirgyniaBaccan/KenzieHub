import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { GlobalReset } from "./styles/reset";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalReset />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </div>
  );
};

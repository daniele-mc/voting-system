import "./App.css";
import VotingList from "./VotingList";
import { ThemeProvider, createTheme } from "@material-ui/core";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#DF73FF",
      },
      secondary: {
        main: "#d5badd",
      },
    },
  });
  const votes = [
    { option: "Sim", count: 3 },
    { option: "Nao", count: 0 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <VotingList />
      </div>
    </ThemeProvider>
  );
}

export default App;

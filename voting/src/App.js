import logo from "./logo.svg";
import "./App.css";
import VotingCard from "./VotingCard";

function App() {
  const votes = [
    { option: "Sim", count: 3 },
    { option: "Nao", count: 0 },
  ];
  return (
    <VotingCard
      title="amanha"
      state="open"
      votes={votes}
    />
  );
}

export default App;

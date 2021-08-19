
import "./App.css";
import VotingCard from "./VotingCard";

function App() {
  const votes = [
    { option: "Sim", count: 3 },
    { option: "Nao", count: 0 },
  ];

  return (
    <div>
      <VotingCard title="amanha" state="open" votes={votes} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Booth from "./Booth";
import Result from "./Result";

function VotingCard(props) {
  const [mode, setMode] = useState(props.state);
  const options = props.votes.map((vote) => vote.option);

  const endVotation = () => {
    setMode("close");
  };

  const select = (index) => {
    props.votes[index].count++;
  };

  return (
    <div>
      {mode === "open" && (
        <div>
          <p>{props.title}</p>
          <Booth options={options} onSelect={(e) => select(e)} />
          <button onClick={endVotation}>Encerrar votacao</button>
        </div>
      )}
      {mode === "close" && (
        <div>
          <Result votes={props.votes} />
        </div>
      )}
    </div>
  );
}

export default VotingCard;

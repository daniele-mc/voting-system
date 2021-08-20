import React, { useEffect, useState } from "react";
import Booth from "./Booth";
import Result from "./Result";
import PropTypes from 'prop-types';

function VotingCard(props) {
  const [mode, setMode] = useState(props.state);
  const options = props.votes.map((vote) => vote.option);

  useEffect(() => {
      console.log('props:', props)
    setMode(props.state)
  },[props.state])

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

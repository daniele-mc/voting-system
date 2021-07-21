import React from "react";

function Result(props) {
  const calcPercentual = (number) => {
    let total = 0;
    props.votes.map((vote) => {
      total += vote.count;
    });
    const percentual = Math.round((number / total) * 100);
    return percentual;
  };

  const result = props.votes.map((vote, index) => {
    return (
      <p key={index.toString()}>
        <strong>{vote.option}:</strong>
        <br />
        {vote.count} votes - {calcPercentual(vote.count)}%
      </p>
    );
  });

  return (
    <div>
      <h2>Escolhas</h2>
      {result}
    </div>
  );
}

export default Result;

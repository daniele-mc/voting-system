import React from "react";

function Booth(props) {
  const options = props.options.map((option, index) => (
    <button key={option} onClick={() => props.onSelect(index)}>
      {option}
    </button>
  ));
  return <div>{options}</div>;
}

export default Booth;

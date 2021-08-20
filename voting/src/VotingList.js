import { Button } from "@material-ui/core";
import React, { useState } from "react";
import ButtonVoting from "./ButtonVoting";
import useVotingData from "./votes-hook";
import VotingCard from "./VotingCard";
import VotingForm from "./VotingForm";

const VotingList = () => {
  const [mode, setMode] = useState("view");
  const [current, setCurrent] = useState(null);
  const [title, setTitle] = useState("");
  const [votes, setVotes] = useState([]);
  const { voting, createVoting, updateVoting, deleteVoting } = useVotingData();

  const addVoting = () => {
    createVoting();
    setCurrent(voting.length);
    setMode("form");
  };

  const editVoting = (index) => {
    setCurrent(index);
    setMode("form");
  };

  const removeVoting = (index) => {
    deleteVoting(index);
  };

  const updateChanges = (chooseVoting) => {
    updateVoting(chooseVoting, current);
    setMode("view");
  };

  const cancelChanges = () => {
    if (mode === "form") {
      deleteVoting(voting.length - 1);
    }
    setMode("view");
  };

  const chooseVoting = (index) => {
    setVotes([]);
    let optionsVoting = [];
    setMode("voting");
    setTitle(voting[index].statement);
    voting[index].options.map((item) => {
      if (item !== "") {
        optionsVoting.push({ option: item, count: 0 });
      }
    });
    setVotes(optionsVoting);
  };

  return (
    <div>
      {mode === "view" && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginBottom: 50,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Votações</h2>

            <ButtonVoting onClick={addVoting}>Nova votação</ButtonVoting>
          </div>
          {voting.map((vt, index) => (
            <p
              key={index}
              style={{
                maxWidth: 900,
                minWidth: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <div>
                  <b>Votação: </b>
                  {vt.statement}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <ButtonVoting
                    size="small"
                    color="secondary"
                    onClick={() => removeVoting(index)}
                  >
                    Remove
                  </ButtonVoting>
                  <div style={{ width: 5 }} />
                  <ButtonVoting size="small" onClick={() => editVoting(index)}>
                    Editar
                  </ButtonVoting>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <b>Opções: </b>
                  {vt.options.map((item, index) => (
                    <span key={index}>
                      {item} {index < vt.options.length - 1 && "/ "}
                    </span>
                  ))}
                </div>
                <ButtonVoting size="small" onClick={() => chooseVoting(index)}>
                  Votar
                </ButtonVoting>
              </div>

              <div
                style={{
                  width: "100%",
                  background: "#af7cbf",
                  height: 1,
                  marginTop: 20,
                }}
              />
            </p>
          ))}
        </div>
      )}

      {mode === "form" && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "#4c4c4e" }}>Formulário</h2>
          <VotingForm
            voting={voting[current]}
            onUpdate={(item) => updateChanges(item)}
            onCancel={() => cancelChanges()}
          />
        </div>
      )}

      {mode === "voting" && (
        <div>
          <h2>Votações</h2>
          <VotingCard title={title} state="open" votes={votes} />
          <button
            onClick={() => setMode("view")}
          >
            Voltar para tela de votações
          </button>
        </div>
      )}
    </div>
  );
};

export default VotingList;

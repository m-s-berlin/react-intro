import { useState } from "react";

export default function EmTeams() {
  const [emTeams, setEmTeams] = useState([
    "Deutschland",
    "Schweiz",
    "Ungarn",
    "Schottland",
  ]);

  const deleteTeam = (index) => {
    const newTeams = [...emTeams];

    newTeams.splice(index, 1);

    console.log(newTeams);
    console.log(index + "geklickt");

    setEmTeams(newTeams);
  };

  const divTeams = emTeams.map((team, index) => (
    <div key={index}>
      {team}
      <button onClick={() => deleteTeam(index)}>X</button>
    </div>
  ));

  return (
    <>
      {divTeams}
      <button onClick={() => setEmTeams([...emTeams, "Belgien"])}>
        Neues Land
      </button>
    </>
  );
}

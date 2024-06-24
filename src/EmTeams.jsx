import { useState } from "react";
import Team from "./team";
import NewTeamBtn from "./newTeamBtn";

export default function EmTeams() {
  const [emTeams, setEmTeams] = useState([
    "Deutschland",
    "Schweiz",
    "Ungarn",
    "Schottland",
  ]);

  const divTeams = emTeams.map((team, index) => (
   <Team key={index} index={index} team={team} emTeams={emTeams} setEmTeams={setEmTeams} />
  ));

  return (
    <>
      {divTeams}
      <NewTeamBtn setEmTeams={setEmTeams} emTeams={emTeams} />
    </>
  );
}

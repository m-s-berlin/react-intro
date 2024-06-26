import { useState } from "react";
import TeamCard from "./TeamCard";
import TeamBtnNew from "./TeamBtnNew";

export default function EmTeams() {
  const [emTeams, setEmTeams] = useState([
    "Deutschland",
    "Schweiz",
    "Ungarn",
    "Schottland",
  ]);

  const divTeams = emTeams.map((team, index) => (
   <TeamCard key={index} index={index} team={team} emTeams={emTeams} setEmTeams={setEmTeams} />
  ));

  return (
    <div>
      <div>{divTeams}</div>
      <TeamBtnNew setEmTeams={setEmTeams} emTeams={emTeams} />
    </div>
  );
}

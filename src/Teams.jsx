import { useEffect, useMemo, useState } from "react";
import TeamCard from "./TeamCard";
import TeamBtnNew from "./TeamBtnNew";
import TeamSearch from "./TeamSearch";

export default function EmTeams() {
  const [emTeams, setEmTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {   // lädt daten in den state nach dem ersten render
    setTimeout(
      () => setEmTeams(["Deutschland", "Schweiz", "Ungarn", "Schottland"]),
      2000
    );
  }, []);

  const filteredTeams = useMemo(() => { // wird bei änderung der searchTerm variable neu berechnet
    console.log("useMemo() called");

    return emTeams.filter((team) => team.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, emTeams]);

  const divTeams = filteredTeams.map((team, index) => (
    <TeamCard
      key={index}
      index={index}
      team={team}
      emTeams={emTeams}
      setEmTeams={setEmTeams}
      // {...team}
    />
  ));

  return (
    <div>
      <TeamSearch setSearchTerm={setSearchTerm} />
      {emTeams.length ? (
        <div>{divTeams}</div>
      ) : (
        <div>
          <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJ6c3UxOXRweWlnazJmc3M3cHRtcGltNWplbnRuY3ZxdXVsZHJsdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwSG1QKOwDjQk/giphy.gif" />
        </div>
      )}
      <TeamBtnNew setEmTeams={setEmTeams} emTeams={emTeams} />
    </div>
  );
}

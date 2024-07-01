import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import TeamBtnNew from "./TeamBtnNew";
import TeamSearch from "./TeamSearch";

export default function EmTeams() {
  const [emTeams, setEmTeams] = useState([]);

  useEffect(() => {
    setTimeout(
      () => setEmTeams(["Deutschland", "Schweiz", "Ungarn", "Schottland"]),
      4000
    );
  }, []);

  const divTeams = emTeams.map((team, index) => (
    <TeamCard
      key={index}
      index={index}
      team={team}
      emTeams={emTeams}
      setEmTeams={setEmTeams}
    />
  ));

  return (
    <div>
      <TeamSearch emTeams={emTeams} />
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

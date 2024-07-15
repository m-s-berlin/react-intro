import { useContext, useMemo } from "react";
import TeamCard from "./TeamCard";
import TeamBtnNew from "./TeamBtnNew";
import TeamSearch from "./TeamSearch";
import { Context } from "../store/Provider";

export default function EmTeams() {
  const { emTeams, searchTerm } = useContext(Context);

  const filteredTeams = useMemo(() => {   // wird bei änderung der searchTerm variable neu berechnet
    console.log("useMemo() called");

    return emTeams.filter((team) =>
      team.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, emTeams]);

  const divTeams = filteredTeams.map((team, index) => (
    <TeamCard
      key={index}
      index={index}
      team={team}
    />
  ));

  return (
    <div>
      <TeamSearch />
      {emTeams.length ? (
        <div>{divTeams}</div>
      ) : (
        <div>
          <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJ6c3UxOXRweWlnazJmc3M3cHRtcGltNWplbnRuY3ZxdXVsZHJsdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwSG1QKOwDjQk/giphy.gif" />
        </div>
      )}
      <TeamBtnNew />
    </div>
  );
}

import { useContext, useMemo } from "react";
import TeamCard from "./TeamCard";
import NewTeamBtn from "./NewTeamBtn";
import TeamSearch from "./TeamSearch";
import { Context } from "../store/Provider";

export default function EmTeams() {
  const { emTeams, searchTerm } = useContext(Context);

  const filteredTeams = useMemo(() => {   // wird bei änderung der searchTerm variable neu berechnet
    return emTeams.filter((team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm5lOGJtazVtcmp4aGM0YjcwaGt1eHNpYjNvbWVpMjd0dTl4eGsxYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3nWhI38IWDofyDrW/giphy.gif" />
        </div>
      )}
      <NewTeamBtn />
    </div>
  );
}

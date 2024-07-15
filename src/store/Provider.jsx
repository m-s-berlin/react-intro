import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [emTeams, setEmTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {                               // lädt daten in den state nach dem ersten render
    fetch("http://localhost:3000/teams").then((res) => {
      res.json().then((teamsApi) => {
        console.log(teamsApi);
        setEmTeams(teamsApi.map((team) => team.name));
      });
    });
  }, []);

  const deleteTeam = (index) => {
    const newTeams = [...emTeams];
    newTeams.splice(index, 1);

    setEmTeams(newTeams);
  };

  const updateTeam = (teamNeu, index) => {
    const newTeams = [...emTeams];
    newTeams[index] = teamNeu;
    setEmTeams(newTeams);
  };

  const addEmTeam = (teamNew) => {
    if (teamNew) {
      setEmTeams([...emTeams, teamNew]);
    }
  };

  return (
    <Context.Provider
      value={{
        emTeams,
        setEmTeams,
        searchTerm,
        setSearchTerm,
        deleteTeam,
        updateTeam,
        addEmTeam,
      }}
    >
      {children}
    </Context.Provider>
  );
}

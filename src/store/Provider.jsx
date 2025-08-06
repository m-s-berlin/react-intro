import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [emTeams, setEmTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // lädt daten in den state nach dem ersten render
    fetch("http://localhost:3000/teams").then((res) => {
      res.json().then((teamsApi) => {
        console.log(teamsApi);
        setEmTeams(teamsApi);
      });
    });
  }, []);

  const deleteTeam = (id) => {
    fetch(`http://localhost:3000/teams/${id}`, {
      method: "delete",
    }).then(() => {
      const newTeams = emTeams.filter((team) => {
        return team._id !== id;
      });
      console.log(newTeams);

      setEmTeams(newTeams);
    });
  };

  const updateTeam = (teamName, id) => {
    if (!teamName) return;

    const teamNeu = { name: teamName };

    fetch(`http://localhost:3000/teams/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teamNeu),
    }).then((res) => {
      res.json().then((teamApi) => {
        const newTeams = [...emTeams];
        const index = newTeams.findIndex((team) => {
          return team._id === teamApi._id;
        });
        newTeams[index] = teamApi;
        setEmTeams(newTeams);
      });
    });
  };

  const addEmTeam = (teamNew) => {
    if (!teamNew.name) return;

    fetch("http://localhost:3000/teams", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teamNew),
    }).then((res) => {
      res.json().then((teamApi) => {
        console.log(teamApi);
        setEmTeams([...emTeams, teamApi]);
      });
    });
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

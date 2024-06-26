import { useState } from "react";

export default function Team({ index, emTeams, setEmTeams, team }) {
  const [editMode, setEditMode] = useState(false);

  const deleteTeam = () => {
    const newTeams = [...emTeams];

    const deletedTeam = newTeams.splice(index, 1);

    console.log(newTeams);
    console.log(deletedTeam + " geklickt");

    setEmTeams(newTeams);
  };

  const updateTeam = (teamNeu) => {
    const newTeams = [...emTeams];
    newTeams[index] = teamNeu;
    console.log(teamNeu);
    setEmTeams(newTeams);
  };

  return (
    <div>
      {editMode ? (
        <input
          onKeyDown={(event) => event.key === "Enter" && setEditMode(!editMode)} // Ternary without ELSE
          value={team}
          onChange={(event) => updateTeam(event.target.value)}
        />
      ) : (
        <span onDoubleClick={() => setEditMode(!editMode)}>{team}</span>
      )}
      <button onClick={() => deleteTeam()}>X</button>
    </div>
  );
}

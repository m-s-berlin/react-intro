import { useState } from "react";

export default function Team({ index, emTeams, setEmTeams, team }) {
  const [editMode, setEditMode] = useState(false);

  const deleteTeam = () => {
    const newTeams = [...emTeams];

    newTeams.splice(index, 1);

    setEmTeams(newTeams);
  };

  const updateTeam = (teamNeu) => {
    const newTeams = [...emTeams];
    newTeams[index] = teamNeu;
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

import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/Provider";

export default function TeamCard({ index, team }) {
  const [editMode, setEditMode] = useState(false);

  const { deleteTeam, updateTeam } = useContext(Context);

  const refInput = useRef();

  const updateTeamAndToggleEdit = () => {
    updateTeam(refInput.current.value, team._id)
    setEditMode(!editMode)
  }

  useEffect(() => {
    editMode && refInput.current.focus();
  }, [editMode]);

  return (
    <div>
      {editMode ? (
        <input
          ref={refInput}
          onKeyDown={(event) => event.key === "Enter" && updateTeamAndToggleEdit()}
          defaultValue={team.name}
        />
      ) : (
        <span onDoubleClick={() => setEditMode(!editMode)}>{team.name}</span>
      )}
      <button onClick={() => deleteTeam(team._id)}>X</button>
    </div>
  );
}

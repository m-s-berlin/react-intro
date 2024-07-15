import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../store/Provider";

export default function Team({ index, team }) {
  const [editMode, setEditMode] = useState(false);

  const { deleteTeam, updateTeam } = useContext(Context);

  const refInput = useRef();

  const toggleEditandFocus = () => {
    setEditMode(!editMode);
    // TODO: focus input element
  };

  useEffect(() => {
    editMode && refInput.current.focus();
  }, [editMode]);

  return (
    <div>
      {editMode ? (
        <input
          ref={refInput}
          onKeyDown={(event) => event.key === "Enter" && setEditMode(!editMode)}
          value={team}
          onChange={(event) => updateTeam(event.target.value, index)}
        />
      ) : (
        <span onDoubleClick={toggleEditandFocus}>{team}</span> // FUNKTIONIERT NOCH NICHT
      )}
      <button onClick={() => deleteTeam(index)}>X</button>
    </div>
  );
}

import { useContext, useRef } from "react";
import { Context } from "../store/Provider";

export default function NewTeamBtn() {
  const refTeam = useRef();

  const { addEmTeam } = useContext(Context);

  const addTeamAndClear = () => {
    const teamNew = { name: refTeam.current.value }
    addEmTeam(teamNew);
    refTeam.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={refTeam} />
      <button onClick={addTeamAndClear}>Neues Land</button>
    </div>
  );
}

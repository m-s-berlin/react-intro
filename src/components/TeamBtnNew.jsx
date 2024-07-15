import { useContext, useRef } from "react";
import { Context } from "../store/Provider";

export default function NewTeamBtn() {
  const refTeam = useRef();

  const { addEmTeam } = useContext(Context);

  const addTeamAndClear = () => {
    addEmTeam(refTeam.current.value);
    refTeam.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={refTeam} />
      <button onClick={addTeamAndClear}>Neues Land</button>
    </div>
  );
}

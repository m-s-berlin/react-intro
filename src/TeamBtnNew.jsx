import { useRef } from "react";

export default function NewTeamBtn({ setEmTeams, emTeams }) {
  const refTeam = useRef();

  const addEmTeam = () => {
    console.log(refTeam);

    if (refTeam.current.value) {
      setEmTeams([...emTeams, refTeam.current.value]);
      refTeam.current.value = "";
    }
  };

  return (
    <div>
      <input type="text" ref={refTeam} />
      <button onClick={addEmTeam}>Neues Land</button>
    </div>
  );
}

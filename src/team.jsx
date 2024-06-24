export default function Team({ index, emTeams, setEmTeams, team }) {
  const deleteTeam = () => {
    const newTeams = [...emTeams];

    const deletedTeam = newTeams.splice(index, 1);

    console.log(newTeams);
    console.log(deletedTeam + " geklickt");

    setEmTeams(newTeams);
  };

  const updateTeam = () =>{
    const newTeams = [...emTeams];
    newTeams[index] = prompt("neuer Name", newTeams[index]);
    setEmTeams(newTeams);
  }

  return (
    <div>
      <span onDoubleClick={() => updateTeam()}>{team}</span>
      <button onClick={() => deleteTeam()}>X</button>
    </div>
  );
}

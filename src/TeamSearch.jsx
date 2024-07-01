import { useState } from "react";

export default function TeamSearch({ emTeams }) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <input placeholder="search..." onChange={(event) => {searchTeam(event.target.value)}}/>
    )
}
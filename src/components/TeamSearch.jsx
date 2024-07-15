import { useContext } from "react";
import { Context } from "../store/Provider";

export default function TeamSearch() {
  const { setSearchTerm } = useContext(Context);

  return (
    <input
      placeholder="search..."
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    />
  );
}

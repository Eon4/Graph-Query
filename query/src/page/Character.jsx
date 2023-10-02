import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../queries/getCharacteres";
import { getCharacterDetails } from '../queries/getCharacterDetails'
import request from "graphql-request";

export const CharacterDetails = () => {
  const { id } = useParams();

  console.log("id", id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["StarwarsCharacter"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        getCharacterDetails, {personId: id}
      ),
  });

  console.log("Character", data)

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }


  return (
    <div>
      <h4>Character details</h4>
      <p>{data.person.name}</p>
      <p>{data.person.gender}</p>
      <p>{data.person.height} cm</p>
      {/* <p>{data.person.species}</p> */}
      <button> <Link to="/">BACK</Link> </button>
    </div>
    
  );
};
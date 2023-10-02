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
      <h2>Character details</h2>
      <h3>Name: {data.person.name}</h3>
      <p>Gender: {data.person.gender}</p>
      <p>Height: {data.person.height} cm</p>
      <p>Species: {data.person.species ? data.person.species.name : "Unknown" } </p>
      {/* <p>Species classification: {data.person.species.classification}</p> */}
      {/* <p>Homeworld: {data.person.species.homeworld.name}</p> */}
      {/* <p>Homeworld language: {data.person.species.language}</p> */}
      <button> <Link to="/">BACK</Link> </button>
    </div>
    
  );
};
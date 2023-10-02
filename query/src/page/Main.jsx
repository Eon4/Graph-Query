import { useQuery } from "@tanstack/react-query";
import { getPersons } from '../queries/getPersons';
import { request } from "graphql-request";


export const Main = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ["getStarwarsPerson"],
      queryFn: async () => request(
        `https://swapi-graphql.netlify.app/.netlify/functions/index`, 
        getPersons
      ),
    });

  console.log("Data", data);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  
  
    return (
      <>
        <h1>Hello world</h1>
      </>
    );
  };
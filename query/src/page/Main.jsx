import { useQuery } from "@tanstack/react-query";
import { getPerson } from '../queries/getPerson';
import { request } from "graphql-request";
import PuffLoader from "react-spinners/PuffLoader";
import { Link } from "react-router-dom";


export const Main = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getStarwarsPerson"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        getPerson
      ),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  console.log("Data", data);
  return (
    <>
      <section>
        <ul>
          {data.allPeople.people.map((item, index) => (
            <Link to={`/character/${item.id}`} key={index}>
              {item.name}
            </Link>
          //    <Link to={`/person/${item.id}`} key={index}>
          //    {item.name}
          //  </Link>
          ))}
        </ul>
      </section>
    </>
  );
};
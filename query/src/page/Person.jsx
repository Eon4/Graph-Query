import { useQuery } from "@tanstack/react-query"
import request from "graphql-request"
import { Link, useParams } from "react-router-dom"
import { getPerson } from "../queries/getPerson"

export const Person = () => {

    const {id} = useParams()
    console.log("id", id)

    const {data, isLoading, error} = useQuery({
        queryKey: ['StarWarsPerson'],
        queryFn: async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', 
        getPerson, 
       {personId: id})
    })

    if (isLoading) return <p>loading...</p>

    if (error) return <p>error: {error.message} </p>

    return (
        <div>
            <h4>Person page</h4>
            <p>Name {data.person.name}</p>
            <button> <Link to="/" >Back</Link></button>
        </div>
    )
}
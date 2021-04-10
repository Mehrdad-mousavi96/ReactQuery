import React from 'react'
import { useQuery } from "react-query";
import Planet from "./Planet"


const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json()
}

const Planets = () => {

    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data)
    return (
      <div>
        <h1>Planets</h1>
        {/* <p>{status}</p> */}

        {status === "error" && (
                <h3>Error fetching Data</h3>
            )}
            
        {status === "loading" && (
                <h3>Loading data...</h3>
            )}
            
        {status === "success" && (
                <div>
                    {data.results.map((planet) => (<Planet key={planet.name} planet={planet} />))}
                </div>
        )}

      </div>
    )
}

export default Planets

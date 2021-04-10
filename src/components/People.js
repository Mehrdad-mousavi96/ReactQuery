import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data);
  return (
    <div>
      <h1>People</h1>
      {/* <p>{status}</p> */}

      {status === "error" && <h3>Error fetching Data</h3>}

      {status === "loading" && <h3>Loading data...</h3>}

      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;

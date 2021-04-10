import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <div>
        <h1>React Query</h1>
        <Navbar setPage={setPage} />
        <div className={"content"}>
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;

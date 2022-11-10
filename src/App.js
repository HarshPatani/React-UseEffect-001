import "./App.css";
import CardList from "./components/CardList";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("cheese cake");
  const [data, setData] = useState([]);

  useEffect(
    (_) => {
      (async (_) => {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=3a017caa&app_key=9c1a50a28dbfc08bcc63ba04e99e1e6b`
        );
        const res = await response.json();
        let arrayData = res.hits;
        console.log(arrayData);
        setData(arrayData);
      })();
    },
    [query]
  );

  return (
    <>
      <NavBar query={query} setQuery={setQuery} />

      <div className="main">
        <h3>
          Search results for <span>{query}</span>
        </h3>
        <CardList data={data} className="cardlist" />
      </div>
    </>
  );
}

export default App;

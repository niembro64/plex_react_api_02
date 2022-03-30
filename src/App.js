import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import PlexAPI from "plex-api";

// var PlexAPI = require("plex-api");
// var PlexAPI = require("../node_modules/plex-api/lib/api");
var client = new PlexAPI("192.168.0.1");

function App() {
  const [pokemon, setPokemon] = useState([
    { name: "poke1", url: "url1" },
    { name: "poke2", url: "url2" },
    { name: "poke3", url: "url3" },
  ]);

  const fetchInfo = (event) => {
    event.preventDefault();
    
    console.log("calling API");

    // client.query("/").then(
    //   function (result) {
    //     console.log(
    //       "%s running Plex Media Server v%s",
    //       result.friendlyName,
    //       result.version
    //     );

    //     // array of children, such as Directory or Server items
    //     // will have the .uri-property attached
    //     console.log(result._children);
    //   },
    //   function (err) {
    //     console.error("Could not connect to server", err);
    //   }
    // );

    // fetch("https://pokeapi.co/api/v2/pokemon/")
    //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //     .then((data) => data.json())
    //     .then((res) => {
    //       // console.log(res.results);
    //       // console.log(res.results[0].name);
    //       setPokemon(res.results);
    //     })
    //     .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Plex API XML Parser</h1>
      <button className="btn btn-primary mx-4" onClick={fetchInfo}>
        Fetch Pokemon
      </button>
      {pokemon.map((item, i) => {
        // return <p key={i}>{item.name}{item.url}</p>;
        return <p key={i}>{item.name}</p>;
      })}
    </div>
  );
}

export default App;

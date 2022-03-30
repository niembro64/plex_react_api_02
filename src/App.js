import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";

var XMLParser = require("react-xml-parser");
// var xmlText = "<Ciao><Books></Books></Ciao>";
// var xml = new XMLParser().parseFromString(xmlText); // Assume xmlText contains the example XML
// console.log(xml);
// console.log(xml.getElementsByTagName("Books"));

// var PlexAPI = require("plex-api");
// var PlexAPI = require("../node_modules/plex-api/lib/api");
// import PlexAPI from "plex-api";
// var client = new PlexAPI("192.168.0.1");

function App() {
  const [pokemon, setPokemon] = useState([
    // { name: "poke1", url: "url1" },
    // { name: "poke2", url: "url2" },
    // { name: "poke3", url: "url3" },
  ]);

  const fetchInfo = (event) => {
    event.preventDefault();

    console.log("calling API");

    fetch(
      "http://192.168.1.25:32400/accounts/?X-Plex-Token=Gg4Av9Z2vwjJzF7mwkDt"
    )
      .then((data) => data.text())
      .then((res) => {
        console.log("HEREEEE");
        // console.log(res);

        var xml = new XMLParser().parseFromString(res); // Assume xmlText contains the example XML
        console.log(xml.children);
        setPokemon(xml.children);
      })
      .catch((err) => console.log(err));

    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //   .then((data) => data.json())
    //   .then((res) => {
    //     console.log(res.results);
    //     // console.log(res.results[0].name);
    //     setPokemon(res.results);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Plex API XML Parser</h1>
      <button className="btn btn-primary mx-4" onClick={fetchInfo}>
        Fetch Pokemon
      </button>
      {pokemon.map((item, i) => {
        // return <p key={i}>{item.name}{item.url}</p>;
        return <p key={i}>{item.attributes.name}</p>;
      })}
    </div>
  );
}

export default App;

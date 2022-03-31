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
  const [onlines, setOnlines] = useState([]);
  const [connecteds, setConnecteds] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [devices, setDevices] = useState([]);
  const [librarySections, setLibrarySections] = useState([]);

  const fetchInfoConnecteds = (event) => {
    event.preventDefault();

    // console.log("calling Connecteds API");

    fetch(
      "http://192.168.1.25:32400/connections?X-Plex-Token=KuRBXRrSd_ZoxothJ9yv"
    )
      .then((data) => data.text())
      .then((res) => {
        // console.log("GETTING CONNECTEDS");
        // console.log(res.split("\n"));
        var connections = res.split("\n");
        var connectionsSplit = [];
        var small = [];
        for (var i = 0; i < connections.length; i++) {
          connectionsSplit[i] = connections[i].split(" - ");
          small = connectionsSplit[i][0].split(" ");
          connectionsSplit[i].unshift("asdf");
          connectionsSplit[i][0] = small[0];
          connectionsSplit[i][1] = small[1];
          // console.log(connectionsSplit[i][1]);

   

          if (
            connectionsSplit[i][0] !== "" &&
            connectionsSplit[i][1] !== "???"
          ) {
            console.log(connectionsSplit[i][1].split(":"));
            small = connectionsSplit[i][1].split(":");
            connectionsSplit[i].unshift("asdfasdf");
            connectionsSplit[i][0] = connectionsSplit[i][1];
            // console.log(connectionsSplit[i]);
            // console.log(small);
            connectionsSplit[i][1] = small[0];
            connectionsSplit[i][2] = small[1];
          }
        }
        console.log(connectionsSplit);

        setConnecteds(connectionsSplit);
      })
      .catch((err) => console.log(err));
  };
  const fetchInfoOnlines = (event) => {
    event.preventDefault();

    console.log("calling Onlines API");

    fetch("https://plex.tv/api/resources?X-Plex-Token=KuRBXRrSd_ZoxothJ9yv")
      .then((data) => data.text())
      .then((res) => {
        console.log("HEREEEE");
        // console.log(res);

        var xml = new XMLParser().parseFromString(res); // Assume xmlText contains the example XML
        console.log(xml.children);
        setOnlines(xml.children);
      })
      .catch((err) => console.log(err));
  };
  const fetchInfoAccounts = (event) => {
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
        setAccounts(xml.children);
      })
      .catch((err) => console.log(err));
  };
  const fetchInfoDevices = (event) => {
    event.preventDefault();

    console.log("calling API");

    fetch(
      "http://192.168.1.25:32400/devices/?X-Plex-Token=Gg4Av9Z2vwjJzF7mwkDt"
    )
      .then((data) => data.text())
      .then((res) => {
        console.log("HEREEEE");
        // console.log(res);

        var xml = new XMLParser().parseFromString(res); // Assume xmlText contains the example XML
        console.log(xml.children);
        setDevices(xml.children);
      })
      .catch((err) => console.log(err));
  };
  const fetchInfoLibrarySections = (event) => {
    event.preventDefault();

    console.log("calling API");

    fetch(
      "http://192.168.1.25:32400/library/sections/?X-Plex-Token=KuRBXRrSd_ZoxothJ9yv"
    )
      .then((data) => data.text())
      .then((res) => {
        console.log("HEREEEE");
        // console.log(res);

        var xml = new XMLParser().parseFromString(res); // Assume xmlText contains the example XML
        console.log(xml.children);
        setLibrarySections(xml.children);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Plex API XML Parser</h1>
      <div className="b">
        <div className="c">
          <h1>Connecteds</h1>
          <button
            className="btn btn-primary mx-4"
            onClick={fetchInfoConnecteds}
          >
            Get Connecteds
          </button>
          {connecteds.map((itemi, i) => {
            return (
              <div key={i} className="leftj">
                {itemi.map((itemj, j) => {
                  return <p key={j}>{itemj}</p>;
                })}
              </div>
            );
          })}
        </div>
        <div className="c">
          <h1>Onlines</h1>
          <button className="btn btn-primary mx-4" onClick={fetchInfoOnlines}>
            Get Onlines
          </button>
          {onlines.map((item, i) => {
            // return <p key={i}>{item.name}{item.url}</p>;
            return (
              <>
                <p key={i}>{item.attributes.name}</p>
                {/* <p key={i}>{item.attributes.defaultAudioLanguage}</p> */}
              </>
            );
          })}
        </div>
        <div className="c">
          <h1>Accounts</h1>
          <button className="btn btn-primary mx-4" onClick={fetchInfoAccounts}>
            Get Accounts
          </button>
          {accounts.map((item, i) => {
            // return <p key={i}>{item.name}{item.url}</p>;
            return (
              <>
                <p key={i}>{item.attributes.name}</p>
                {/* <p key={i}>{item.attributes.defaultAudioLanguage}</p> */}
              </>
            );
          })}
        </div>
        <div className="c">
          <h1>Devices</h1>{" "}
          <button className="btn btn-primary mx-4" onClick={fetchInfoDevices}>
            Get Devices
          </button>
          {devices.map((item, i) => {
            // return <p key={i}>{item.name}{item.url}</p>;
            return (
              <>
                <p key={i}>{item.attributes.name}</p>
                {/* <p key={i}>{item.attributes.subtitleMode}</p> */}
              </>
            );
          })}
        </div>
        <div className="c">
          <h1>Sections</h1>{" "}
          <button
            className="btn btn-primary mx-4"
            onClick={fetchInfoLibrarySections}
          >
            Get Sections
          </button>
          {librarySections.map((item, i) => {
            // return <p key={i}>{item.name}{item.url}</p>;
            return (
              <>
                <p key={i}>{item.attributes.title}</p>
                {/* <p key={i}>{item.attributes.subtitleMode}</p> */}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

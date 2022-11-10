// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Character from "./character";

import "./App.css";

// console.clear();

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("mounted");
    fetch("https://randomuser.me/api?results=25")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  useEffect(() => {
    console.log("characters", characters);
  }, [characters]);

  return (
    <div className="app">
      {characters.map((character, index) => {
        return <Character character={character} />;
      })}
    </div>
  );
}

export default App;

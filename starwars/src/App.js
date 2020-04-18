import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")
      .then((res) => {
        console.log(res.data.results);
        setCharacterData([...res.data.results]);
      })
      .catch((err) => console.error("Axios Error", err));
  }, []);

  const [planetData, setPlanetData] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/planets/")
      .then((res) => {
        console.log(res.data.results);
        setPlanetData([...res.data.results]);
      })
      .catch((err) => console.error("Axios Error", err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {characterData.map((item, index) => (
        <Character key={index} item={item} planet={planetData} />
      ))}
    </div>
  );
};

export default App;

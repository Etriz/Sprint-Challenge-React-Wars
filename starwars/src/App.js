import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Character from "./components/Character";
import Pagination from "./components/Pagination";

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
  width: 75%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [getURL, setGetURL] = useState("https://swapi.py4e.com/api/people/?page=1");
  const [characterData, setCharacterData] = useState([]);
  const [previousPage, setPreviousPage] = useState("");
  const [nextPage, setNextPage] = useState("");

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(getURL)
      .then((res) => {
        console.log(res.data);
        setCharacterData([...res.data.results]);
        setPreviousPage(res.data.previous);
        setNextPage(res.data.next);
      })
      .catch((err) => console.error("Axios Error", err));
  }, [getURL]);

  const gotoPreviousPage = () => {
    console.log("previous clicked");
    setGetURL(previousPage);
  };
  const gotoNextPage = () => {
    console.log("next clicked");
    setGetURL(nextPage);
  };
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterContainer>
        {characterData.map((item, index) => (
          <Character key={index} item={item} />
        ))}
      </CharacterContainer>
      <Pagination gotoPreviousPage={gotoPreviousPage} gotoNextPage={gotoNextPage} />
    </div>
  );
};

export default App;

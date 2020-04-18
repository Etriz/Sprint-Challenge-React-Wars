// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CharacterCard = styled.div`
  background: #000000bf;
  color: white;
  padding: 0rem 2rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  width: 25rem;
`;
const NameTitle = styled.h2`
  margin: 0.5rem 0rem;
`;

const Character = (props) => {
  const [planetName, setPlanetName] = useState("");
  const [speciesName, setSpeciesName] = useState("");

  const getSpecies = () => {
    axios.get(props.item.species).then((res) => {
      setSpeciesName(res.data.name);
    });
  };
  const getPlanet = () => {
    axios.get(props.item.homeworld).then((res) => {
      setPlanetName(res.data.name);
    });
  };
  const capitalize = (str) => {
    if (str === "n/a") {
      return "N/A";
    } else return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <CharacterCard>
      <NameTitle>{props.item.name}</NameTitle>
      <hr />
      <p>Gender: {capitalize(props.item.gender)}</p>
      <p>
        Species: {getSpecies()}
        {speciesName}
      </p>
      <p>
        Homeworld: {getPlanet()}
        {planetName}
      </p>
    </CharacterCard>
  );
};

export default Character;

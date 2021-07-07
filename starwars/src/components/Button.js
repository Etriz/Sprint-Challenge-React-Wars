import React from "react";
import styled from "styled-components";

const BtnStyle = styled.button`
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    border: 2px solid white;
    background: #000000bf;
    color: white;
  }
`;

const Button = (props) => {
  return <BtnStyle onClick={() => props.clickFunction()}>{props.text}</BtnStyle>;
};

export default Button;

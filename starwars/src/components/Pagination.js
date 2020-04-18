import React from "react";
import Button from "./Button";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 75%;
`;

const Pagination = (props) => {
  return (
    <ButtonGroup>
      <Button text={"Previous Set"} clickFunction={props.gotoPreviousPage} />
      <Button text={"Next Set"} clickFunction={props.gotoNextPage} />
      {/* ask Igor about the differences and why top doesnt work */}
      {/* top works now ... but why do i have to pass function into props and not use on component as below */}
      {/* <Button text={"Next Set"} onClick={() => props.gotoNextPage()}> /> */}
    </ButtonGroup>
  );
};

export default Pagination;

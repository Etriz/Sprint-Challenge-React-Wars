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
      <Button text={"Previous Set"} />
      <Button
        text={"Next Set"}
        onClick={() => {
          props.gotoNextPage();
        }}
      />
    </ButtonGroup>
  );
};

export default Pagination;

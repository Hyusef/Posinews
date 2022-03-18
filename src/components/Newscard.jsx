import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 5px;
  width: 60%;
  padding: 5px;
  align-items:center;
`;

function Newscard({ image, title, link }) {
  return (
    <div>
      <CardBox>
        <a href={link}>
          <img src={`https://${image}`}></img>
        </a>
        <a href={link}>
          <p>{title}</p>
        </a>
      </CardBox>
    </div>
  );
}

export default Newscard;

import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 5px;
  width: 60%;
  padding: 5px;
  align-items:center;
  :hover{
    box-shadow:
    1px 1px #373737,
    2px 2px #373737,
    3px 3px #373737,
    4px 4px #373737,
    5px 5px #373737,
    6px 6px #373737;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    transition: .5s ease;
    }

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

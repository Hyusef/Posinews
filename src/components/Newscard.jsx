import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  display: inline-block;
  border: 1px solid black;
  margin: 10px;
  width: 60%;
  padding: 15px;
  :hover {
    box-shadow: 1px 1px #373737, 2px 2px #373737, 3px 3px #373737,
      4px 4px #373737, 5px 5px #373737, 6px 6px #373737;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    transition: 0.5s ease;
  }
  cursor: pointer;
`;





function Newscard({ image, title, link }) {
  return (
    <div>
      <a href={link}>
        <CardBox>
          <div style={{ display: "flex" }}>
            <img width="140px" src={ image?`https://${image}`:"https://images.pexels.com/photos/4185957/pexels-photo-4185957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}></img>
            <p>{title}</p>
          </div>
        </CardBox>
      </a>
    </div>
  );
}

export default Newscard;

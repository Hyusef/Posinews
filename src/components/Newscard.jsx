import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  display: inline-block;
  border: 1px solid black;
  margin: 10px;
  width: 100%;
  padding: 15px;
  :hover {
    box-shadow: 1px 1px #373737, 2px 2px #373737, 3px 3px #373737,
      4px 4px #373737, 5px 5px #373737, 6px 6px #373737;
    background: #fcfcfc;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    transition: 0.5s ease;
  }
  cursor: pointer;
`;

const InnerCardBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 2px;
  p {
    margin: 7px;
    padding: 5px;
  }
`;

function Newscard({ image, title, link }) {
  return (
    <div>
      <a href={link}>
        <CardBox>
          <InnerCardBox>
            <img
              width="140px"
              alt="News Thumbnails"
              src={
                image
                  ? `https://${image}`
                  : "https://images.pexels.com/photos/4185957/pexels-photo-4185957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
            ></img>
            <p>{title}</p>
          </InnerCardBox>
        </CardBox>
      </a>
    </div>
  );
}

export default Newscard;

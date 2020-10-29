import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  background: red;
  width: 200px;
  height: 300px;
  margin: 2em;

  &:hover {
    background: white;
  }
`;
const CardTitle = styled.h2`
  color: white;
`;

function Card({ card }) {
  return (
    <CardDiv>
      <CardTitle>{card.item}</CardTitle>
      <p>{card.text}</p>
    </CardDiv>
  );
}

export default Card;

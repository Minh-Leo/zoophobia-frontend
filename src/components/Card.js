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
const CardTitle = styled.div`
  color: white;
`;

function Card({ card }) {
  return (
    <CardDiv>
      <CardTitle>{card.id}</CardTitle>
      <h4>{card.content}</h4>
    </CardDiv>
  );
}

export default Card;

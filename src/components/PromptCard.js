import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  background: black;
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

function PromptCard({ card }) {
  return (
    <CardDiv>
      <CardTitle>{card.item}</CardTitle>
      <p>{card.text}</p>
    </CardDiv>
  );
}

export default PromptCard;

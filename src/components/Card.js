import React from 'react';
import socket from '../socketConfig';

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

const Card = ({ card, onClick }) => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   // console.log(userInput);
  //   socket.emit('card-chosen-by-player', card);
  // };

  return (
    <CardDiv onClick={() => onClick(card)}>
      <CardTitle>{card.item}</CardTitle>
      <p>{card.text}</p>
    </CardDiv>
  );
};

export default Card;

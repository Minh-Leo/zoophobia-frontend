import React from 'react';
import Card from './Card';
import PromptCard from './PromptCard';
import socket from '../socketConfig';

import styled from 'styled-components';

const CardTable = styled.div`
  background: yellow;
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-flow: row wrap;
`;

function Table({ cardsArr, promptCard, gameID, player }) {
  let playerData = { player, gameID };
  const onClick = (card) => {
    // e.preventDefault();
    // console.log(card);
    socket.emit('card-chosen-by-player', { card, playerData });
  };

  // cardsArr
  return (
    <CardTable>
      <PromptCard card={promptCard} />
      {cardsArr.map((card, i) => (
        <Card key={i} card={card} onClick={onClick} />
      ))}
    </CardTable>
  );
}

export default Table;

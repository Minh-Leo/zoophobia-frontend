import React from 'react';
import Card from './Card';
import PromptCard from './PromptCard';

import styled from 'styled-components';

const CardTable = styled.div`
  background: yellow;
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-flow: row wrap;
`;

function Table({ cardsArr, promptCard }) {
  // cardsArr
  return (
    <CardTable>
      <PromptCard card={promptCard} />
      {cardsArr.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </CardTable>
  );
}

export default Table;

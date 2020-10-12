import React from 'react';
import Card from './Card';

import styled from 'styled-components';

const CardTable = styled.div`
  background: yellow;
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-flow: row wrap;
`;

function Table({ cardsArr }) {
  // cardsArr
  return (
    <CardTable>
      {cardsArr.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </CardTable>
  );
}

export default Table;

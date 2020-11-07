import React from 'react';
import Card from './Card';
import PromptCard from './PromptCard';
import socket from '../socketConfig';

import styled from 'styled-components';

function Table({ cardsArr, promptCard, gameID, player, players }) {
  let playerData = { player, gameID };
  const onClick = (card) => {
    // e.preventDefault();
    // console.log(card);
    socket.emit('card-chosen-by-player', { card, playerData });
  };

  // cardsArr
  return (
    <CardTable className='container'>
      <div className='row'>
        <PromptCard card={promptCard} img={'/media/promt2.png'} />
      </div>
      <div className='row'>
        <Trolley className='col-2 '>
          <img className='align-self-end' src={'/media/trolley.png'} alt='' />
        </Trolley>
        <ChosenResponses className='col-10'>
          {players.map((player, i) => {
            console.log(player, i);
            return player.currentChosenCard !== 0 ? (
              <Card
                key={i}
                card={player.currentChosenCard[0]}
                img={'/media/resp3.png'}
                onClick={onClick}
              />
            ) : (
              <CardPlaceholder />
            );
          })}
        </ChosenResponses>
      </div>
      <RespCardsContainer className='row'>
        {cardsArr.map((card, i) => (
          <Card
            key={i}
            card={card}
            img={'/media/resp12.png'}
            onClick={onClick}
          />
        ))}
      </RespCardsContainer>
    </CardTable>
  );
}

const CardTable = styled.div`
  // width: 80vw;
  // height: 70vh;
`;

const CardPlaceholder = styled.div`
  width: 200px;
  height: 300px;
  border: 2px dashed blue;
`;
const Trolley = styled.div`
  width: 30%;
  height: 700px;
  display: flex;
  border: 1px solid red;
`;
const ChosenResponses = styled.div`
  background: url('/media/supermarket-background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 70%;
  height: 700px;
  border: 1px solid red;
  display: flex;
`;
const RespCardsContainer = styled.div`
  // width: 100%;
  // height: 250px;
  // display: flex;
  // background: transparent;
  // overflow: hidden;
  border: 1px solid red;

  // copy part
  bottom: 0;
  display: flex;
  height: 150px;
  padding: 0 10px;
  justify-content: center;
  position: relative;
  left: 0;
  bottom: 0;
`;

export default Table;

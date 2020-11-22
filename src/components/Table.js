import React from 'react';
import useSound from 'use-sound';

import Card from './Card';
import ChosenCard from './ChosenCard';
import PromptCard from './PromptCard';
import socket from '../socketConfig';

import styled from 'styled-components';

function Table({
  cardsArr,
  promptCard,
  gameID,
  player,
  players,
  isRoundFinished,
}) {
  let playerData = { player, gameID };
  let cardCzar = player.isCurrentPlayer;

  // const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.25 });
  const [cardFlip] = useSound('/media/sfx/cardFlip1.wav', { volume: 0.25 });

  const onClick = (card) => {
    // e.preventDefault();
    // console.log(card);
    cardFlip();
    socket.emit('card-chosen-by-player', { card, playerData });
  };

  const onFinalChosen = (card) => {
    socket.emit('final-chosen-card', { card, playerData });
  };

  const onRoundFinished = () => {
    console.log('next round');
    socket.emit('new-round', { playerData });
  };

  // cardsArr
  return (
    <CardTable className='jumbotron-fluid'>
      <div className='row'>
        <PromptCard card={promptCard} />
        {isRoundFinished && cardCzar ? (
          <ButtonNextRound
            type='button'
            className='btn btn-secondary'
            onClick={onRoundFinished}
          >
            Next Round
          </ButtonNextRound>
        ) : null}
      </div>

      <TrolleyAndCards className='row'>
        <div className='row' style={{ height: '30%' }}></div>
        <div
          className='row'
          style={{ width: '100%', height: '70%', margin: 0 }}
        >
          <TrolleyContainer className='col-3'>
            <Trolley>
              <img src={'/media/trolley.png'} alt='' />
            </Trolley>
          </TrolleyContainer>
          {/* <div > */}
          <ChosenResponses className='col-9'>
            {players.map((player, i) => {
              return player.currentChosenCard.length !== 0 ? (
                <ChosenCard
                  key={i}
                  nickName={player.nickName}
                  card={player.currentChosenCard[0]}
                  size={280}
                  onClick={onFinalChosen}
                  iscardCzar={cardCzar}
                />
              ) : (
                <CardPlaceholder key={i} />
              );
            })}
          </ChosenResponses>
        </div>
        {/* </div> */}
      </TrolleyAndCards>

      <RespCardsContainer className='row'>
        {cardsArr.map((card, i) => (
          <Card key={i} card={card} size={150} onClick={onClick} />
        ))}
      </RespCardsContainer>
    </CardTable>
  );
}

const CardTable = styled.div`
  width: 80%;
  // height: 70vh;
`;

const CardPlaceholder = styled.div`
  width: 200px;
  height: 300px;
  border: 2px dotted var(--info);
`;
const TrolleyAndCards = styled.div`
  // background: url('/media/supermarket-background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  margin: 0;
`;
const TrolleyContainer = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  // border: 1px solid blue;
`;
const Trolley = styled.div`
  width: 70%;
  align-self: flex-end;
  // border: 1px solid red;

  img {
    width: 100%;
  }
`;
const ChosenResponses = styled.div`
  width: 100%;
  height: 700px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  // border: 1px solid red;
`;
const RespCardsContainer = styled.div`
  // width: 100%;
  // height: 250px;
  // display: flex;
  // background: transparent;
  // overflow: hidden;
  // border: 1px solid red;

  // copy part
  display: flex;
  width: 100%;
  height: 150px;
  padding: 0 10px;
  justify-content: center;
  position: relative;
  left: 0;
  bottom: 0;
`;
const ButtonNextRound = styled.div`
  position: absolute;
  top: 20px;
  left: 350px;
  z-index: 10;
`;

export default Table;

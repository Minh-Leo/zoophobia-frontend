import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import socket from '../socketConfig';
import styled from 'styled-components';

import Header from './Header';
import DisplayGameCode from './DisplayGameCode';
import CountDown from './CountDown';
import StartBtn from './StartBtn';
import Table from './Table';
import ChatComponent from './ChatComponent';
import { CornerTopLeft, CornerRight } from './Corner';
import CardMatchingScreen from './CardMatchingScreen';

// import { Cards } from '../testCard';

const findPlayer = (players) =>
  players.find((player) => player.socketID === socket.id);

function Zoophobia({ gameState }) {
  const [animation, setAnimation] = useState(false);
  const [matchingCards, setMatchingCards] = useState([]);

  const {
    _id,
    players,
    promptCards,
    isOpen,
    isOver,
    isRoundFinished,
  } = gameState;

  const player = findPlayer(players);
  if (_id === '') return <Redirect to='/' />;
  if (isOver === true) return <Redirect to='/gamescore' />;

  // Start Round event emit

  // End Round event emit

  const onContinue = () => {
    setAnimation(false);
  };

  socket.on('animation-false', () => {
    setAnimation(false);
  });

  socket.on('cards-pair', ({ nickName, card, promptCard }) => {
    // console.log(nickName, card.backImg, promptCard.backImg);
    setMatchingCards([nickName, card.backImg, promptCard.backImg]);
    setAnimation(true);
  });

  return (
    <div className='jumbotron-fluid'>
      <Header player={player} />
      {/* <span>{promptCards.length}</span> */}
      {/* Before game start */}
      {isOpen ? (
        <>
          <WaitingScreen>
            <CountDown />
            <StartBtn player={player} gameID={_id} />
            <DisplayGameCode gameID={_id} />
          </WaitingScreen>
          <CornerTopLeft />
          <CornerRight />
        </>
      ) : null}
      {/* After game start */}
      {!isOpen && !isOver ? (
        <GameStage>
          <Table
            cardsArr={player.responseCards}
            promptCard={promptCards[0]}
            promptNo={promptCards.length}
            gameID={_id}
            player={player}
            players={players}
            isRoundFinished={isRoundFinished}
          />
          <ChatComponent player={player} />
        </GameStage>
      ) : null}
      {/* Card Matching animation */}
      {/* {animation && Array.isArray(matchingCards) && matchingCards.length ? (
        <CardMatchingScreen
          nickName={matchingCards[0]}
          backResp={matchingCards[1]}
          backPrompt={matchingCards[2]}
          onContinue={onContinue}
          player={player}
          gameID={_id}
        />
      ) : null} */}
    </div>
  );
}

const GameStage = styled.div`
  width: 97vw;
  height: 95vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const WaitingScreen = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Zoophobia;

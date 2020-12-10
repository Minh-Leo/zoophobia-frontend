import React from 'react';
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

const findPlayer = (players) =>
  players.find((player) => player.socketID === socket.id);

function Zoophobia({ gameState }) {
  const {
    _id,
    players,
    promptCards,
    isOpen,
    isOver,
    isRoundFinished,
    animationMatching,
    animationMatchingCards,
  } = gameState;

  const player = findPlayer(players);
  if (_id === '') return <Redirect to='/' />;
  if (isOver === true) return <Redirect to='/gamescore' />;

  // Start Round event emit
  // End Round event emit

  return (
    <div className='jumbotron-fluid'>
      <Header player={player} gameID={_id} />
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
            animationMatching={animationMatching}
            animationMatchingCards={animationMatchingCards}
          />
          <ChatComponent player={player} />
        </GameStage>
      ) : null}
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

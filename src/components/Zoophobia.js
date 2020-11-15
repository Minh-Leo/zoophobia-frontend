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
// import { Cards } from '../testCard';

const findPlayer = (players) =>
  players.find((player) => player.socketID === socket.id);

function Zoophobia({ gameState }) {
  // console.log(Cards);
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

  return (
    <div className='jumbotron-fluid'>
      <Header player={player} />
      <span>{promptCards.length}</span>
      {/* Before game start */}
      {isOpen ? (
        <div className='text-center'>
          <CountDown />
          <StartBtn player={player} gameID={_id} />
          <DisplayGameCode gameID={_id} />
        </div>
      ) : null}
      {/* After game start */}
      {!isOpen && !isOver ? (
        <GameStage>
          <Table
            cardsArr={player.responseCards}
            promptCard={promptCards[0]}
            gameID={_id}
            player={player}
            players={players}
            isRoundFinished={isRoundFinished}
          />
          <ChatComponent player={player} />
        </GameStage>
      ) : null}
      {/* <ScoreBoard players={players} /> */}
    </div>
  );
}

const GameStage = styled.div`
  width: 99vw;
  height: 95vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Zoophobia;

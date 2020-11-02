import React from 'react';
import { Redirect } from 'react-router-dom';
import socket from '../socketConfig';
import styled from 'styled-components';

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
  const { _id, players, promptCards, isOpen, isOver } = gameState;
  const player = findPlayer(players);
  // console.log(player.responseCards);
  if (_id === '') return <Redirect to='/' />;

  // Start Round event emit

  // End Round event emit

  return (
    <div className='jumbotron text-center'>
      <CountDown />
      <StartBtn player={player} gameID={_id} />
      {isOpen ? <DisplayGameCode gameID={_id} /> : null}
      {!isOpen ? (
        <GameStage>
          <Table
            cardsArr={player.responseCards}
            promptCard={promptCards[0]}
            gameID={_id}
            player={player}
          />
          <ChatComponent player={player} />
        </GameStage>
      ) : null}
      {/* <ScoreBoard players={players} /> */}
    </div>
  );
}

const GameStage = styled.div`
  width: 95vw;
  height: 95vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Zoophobia;

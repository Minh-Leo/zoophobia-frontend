import React from 'react';
import { Redirect } from 'react-router-dom';
import socket from '../socketConfig';
import styled from 'styled-components';

import DisplayGameCode from './DisplayGameCode';

import StartBtn from './StartBtn';
import Table from './Table';
import { Cards } from '../testCard';

const findPlayer = (players) =>
  players.find((player) => player.socketID === socket.id);

function Zoophobia({ gameState }) {
  console.log(Cards);
  const { _id, players, isOpen, isOver } = gameState;
  const player = findPlayer(players);
  if (_id === '') return <Redirect to='/' />;

  // Start Round event emit

  // End Round event emit

  return (
    <div className='text-center'>
      {/* 
      <CountDown /> */}
      <StartBtn player={player} gameID={_id} />
      {isOpen ? <DisplayGameCode gameID={_id} /> : null}
      {/* <ScoreBoard players={players} /> */}
    </div>
  );
}

export default Zoophobia;

import React from 'react';
import socket from '../socketConfig';
import styled from 'styled-components';

import Header from './Header';

const findPlayer = (players) =>
  players.find((player) => player.socketID === socket.id);

function GameScore({ gameState }) {
  const { players } = gameState;

  const player = findPlayer(players);

  return (
    <div className='jumbotron-fluid'>
      <Header player={player}></Header>

      <div className=' text-center'>
        <h1>game score page</h1>

        {players.map((player, i) => (
          <div key={i} className='card' style={{ width: '18rem' }}>
            {/* <img className='card-img-top' src='...' alt='Card cap' /> */}
            <div className='card-body'>
              <h5 className='card-title'>{player.nickName}</h5>
              <p className='card-text'>more info...</p>
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Total points: {player.points}</li>
              <li className='list-group-item'>
                Total matching combination: {player.winningCards.length}
              </li>
              <li className='list-group-item'>
                Total unmatch combination: {player.unmatchCards.length}
              </li>
            </ul>
            <div className='card-body'>
              <button className='card-link'>Card link</button>
              <button className='card-link'>Another link</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameScore;

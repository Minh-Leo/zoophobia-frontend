import React from 'react';
import socket from '../socketConfig';
import styled from 'styled-components';

import Header from './Header';
import { CornerTopLeft, CornerRight } from './Corner';

const findPlayer = (players) =>
  players.find((player) => player.socketID === socket.id);

function GameScore({ gameState }) {
  const { players } = gameState;

  const player = findPlayer(players);

  return (
    <>
      <Page>
        <Header player={player}></Header>

        <h1 className='text-center white m-5'>GAME SCORE</h1>
        <PlayersScore className=''>
          {players.map((player, i) => (
            <div key={i} className='card m-4' style={{ width: '18rem' }}>
              {/* <img className='card-img-top' src='...' alt='Card cap' /> */}
              <div
                className='card-body'
                style={{
                  color: 'var(--primary)',
                  background: 'var(--warning)',
                }}
              >
                <h3 className='card-title'>Player: {player.nickName}</h3>
                <p className='card-text'>more info...</p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  Total points: <strong> {player.points}</strong>
                </li>
                <li className='list-group-item'>
                  Total matching combinations: {player.winningCards.length}
                </li>
                <li className='list-group-item'>
                  Total unmatched combinations: {player.unmatchCards.length}
                </li>
              </ul>
              <div className='card-body'>
                <button className='card-link'>Yayyy</button>
              </div>
            </div>
          ))}
        </PlayersScore>
        <CornerTopLeft />
        <CornerRight />
      </Page>
    </>
  );
}

const Page = styled.div`
  position: relative;
`;

const PlayersScore = styled.div`
  height: 40vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default GameScore;

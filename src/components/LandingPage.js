import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import GameMenu from './GameMenu';

function LandingPage() {
  return (
    <Landing className='jumbotron-fluid'>
      <Header />

      <div className='text-center'>
        <h1>Welcome to game</h1>
        <GameMenu />
      </div>
    </Landing>
  );
}

const Landing = styled.div`
  & .text-center {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default LandingPage;

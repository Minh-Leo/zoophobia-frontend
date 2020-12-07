import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import { CornerTopLeft, CornerRight } from './Corner';
import GameMenu from './GameMenu';

function LandingPage() {
  return (
    <Landing className='jumbotron-fluid'>
      <Header />

      <div className='text-center' style={{ marginTop: '5%' }}>
        <h1
          className='bouncing stroke'
          style={{
            fontSize: '4rem',
          }}
        >
          Welcome to{' '}
        </h1>
        <BigLogo className='bouncing' src={`/media/logo.png`} alt='' />
        <GameMenu />
      </div>

      <CornerTopLeft />
      {/* <CornerLeft /> */}
      <CornerRight />
    </Landing>
  );
}

const Landing = styled.div`
  position: relative;

  & .text-center {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const BigLogo = styled.img`
  width: 60vw;
  // max-height: 30vh;
`;

export default LandingPage;

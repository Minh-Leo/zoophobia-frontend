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
        <h1 style={{ color: '#f9f5f0' }}>Welcome to </h1>
        <BigLogo src={`/media/logo.png`} alt='' />
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
  // box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;

export default LandingPage;

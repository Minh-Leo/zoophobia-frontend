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
        <Description className='shadow-1'>
          <p>
            In ZOOPHOBIA you are an animal who needs to do your grocery
            shopping. You love going to the Mega Mart and seeing creatures of
            all species and sizes in one place! But sometimes animals get
            bullied for their species, which can make it hard for them to finish
            shopping…
            <br />
            Your mission is to work together as a team and collect as many
            groceries as you can! Do this by reading about tricky situations in
            the Mega Mart and voting on the best responses to keep bullied
            animals safe. Have fun and good luck!
          </p>
          <h5 style={{ color: '#d34a88' }}>
            Suitable for up to 6 players // ages 9+ // Website best viewed Full
            Screen on a Desktop computer or Laptop. Ideal screen resolution for
            best experience is: full HD 1920x1080
          </h5>
        </Description>
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

const Description = styled.div`
  width: 50%;
  margin-top: 2em;
  padding: 1em 2em;
  color: #3c3c3c;
  text-align: left;
  background: #ffc10799;
  border-radius: 30px;
`;

export default LandingPage;

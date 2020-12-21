import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
// import useSound from 'use-sound';
// import socket from '../socketConfig';

import Player from './Player';

import styled from 'styled-components';

const Header = ({ player, gameID }) => {
  // const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.6 });
  // const [clickSound] = useSound('/media/sfx/btnSound.mp3', { volume: 0.1 });

  const onAlert = (e) => {
    e.preventDefault();
    let ans = window.confirm(
      'Are you sure you want to go back to Home? You will lose your current game progess'
    );
    if (ans === false) {
      return false;
    } else {
      history.push('/');
    }
  };

  const mouseEnter = () => {
    document.getElementById('Modal').style.display = 'flex';
  };
  const mouseLeave = () => {
    document.getElementById('Modal').style.display = 'none';
  };

  console.log(window.location.pathname);

  return (
    <div className='row mx-0'>
      <div className='col-8'>
        {window.location.pathname !== '/' ? (
          <Link to={gameID ? `/game/${gameID}` : '/'}>
            <Logo className='logo' src={`/media/logo-sm.png`} alt='' />
          </Link>
        ) : null}
      </div>

      <NavBar className='col-4 navbar navbar-expand-lg'>
        {player ? (
          <PlayerStatus>
            {' '}
            {player.isCurrentPlayer
              ? `${player.nickName} - your turn`
              : `${player.nickName}`}
          </PlayerStatus>
        ) : null}
        <div className='' id=''>
          <div className='navbar-nav'>
            {gameID ? (
              <>
                <Link
                  className='nav-item nav-link active'
                  onClick={onAlert}
                  to={`/`}
                >
                  Back to Home
                </Link>
                <TutoLink
                  className='btn btn-outline-info'
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                >
                  Game Rules
                </TutoLink>
                <ModalScreen id='Modal'>
                  {/* <Tutoone></Tutoone>
                  <Tutotwo></Tutotwo> */}
                  <Description className='shadow-1 bouncing'>
                    <h1 className='stroke'>Starting the game</h1>
                    <p>
                      1. Once you have organised your friends to play Zoophobia
                      online together, choose one person to be a "Game Creator".{' '}
                      <br />
                      2. As the Game Creator, you click "Create Game" on the
                      Home page, choose a nickname and send the game code to the
                      other players. Don’t click "Start game" until all players
                      have joined! <br />
                      3. As a player, you click "Join Game" on the Home page,
                      paste the game code into the ‘Enter Game ID’ box and
                      choose a nickname. <br />
                      4. Once all players have joined the game, the Game Creator
                      can click "Start Game".
                    </p>
                    <h1 className='stroke'>Playing the game</h1>
                    <p>
                      1. Players are each dealt a random hand of Response cards
                      (cards at the bottom of the screen). <br />
                      2. A total of 12 Prompt cards (the card at the top left of
                      the screen) will appear throughout the game. Players must
                      read the scenarios on each Prompt card and nominate 1
                      Response card from their hand that best suits. This is
                      done by clicking on the card, and you can also change your
                      selected response by clicking on another card in your
                      hand. <br />
                      3. Once all players have nominated a Response card,
                      players can use the chat function (and/or other tele- or
                      video-conferencing) to discuss which nominated Response
                      card they wish to submit as a team. Remember, this is a
                      cooperative game so work together to find the best
                      response! <br />
                      4. When it’s your turn (this will be written on the top
                      right of the screen), you must click "Choose" on the card
                      that your team decides is the best response. <br />
                      5. Correct responses result in a matching grocery item (1
                      point) that will show up in players’ shopping carts.{' '}
                      <br />
                      6. If the team creates 7 grocery matches by the end of the
                      game, you all win!
                    </p>
                  </Description>
                </ModalScreen>
                <Player />
              </>
            ) : (
              <>
                <Link className='nav-item nav-link active' to='/'>
                  Home Page
                </Link>
                <Link className='nav-item nav-link' to='/how-to-play'>
                  How To play?
                </Link>
                <Link className='nav-item nav-link' to='/about'>
                  About Us
                </Link>
                {/* <Player /> */}
              </>
            )}
          </div>
        </div>
      </NavBar>
    </div>
  );
};

const Logo = styled.img`
  position: relative;
  left: 50%;
  &:hover {
    transform: scale(1.02);
  }
`;
const PlayerStatus = styled.h4`
  font-size: 20px;
  margin: 0 2em 0 0;
  padding: 8px;
  color: var(--primary);
`;
const NavBar = styled.nav`
  padding-right: 0;
  height: 60px;
  top: 36px;
  background: #292929bb;
  border-radius: 15px 0 0 15px;

  & .navbar-nav {
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  & a.nav-link {
    font-family: 'Animals';
    color: #66e4f4;
    margin-right: 10px;
    transition: ease 0.3s all;

    &:hover {
      color: #d3864a;
      transform: scale(1.1) translateY(-2px);
    }
  }
`;

const TutoLink = styled.div`
  margin-left: 30px;
  border: none;
  text-transform: uppercase;
  font-family: 'Animals';
  color: #66e4f4;
`;
const ModalScreen = styled.div`
  width: 100vw;
  height: 90vh;
  position: fixed;
  top: 100px;
  left: 0;
  background: #000000bb;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
const Description = styled.div`
  width: 70%;
  font-size: 20px;
  margin-top: 2em;
  padding: 1em 2em;
  color: #3c3c3c;
  text-align: left;
  background: #ffc107dd;
  border-radius: 30px;
`;
// const Tutoone = styled.div`
//   width: 650px;
//   height: 700px;
//   background: url('/media/page/Howtoplay1_website.png');
//   background-size: contain;
//   background-repeat: no-repeat;
//   position: relative;
//   animation: fadeIn cubic-bezier(0.28, 0.84, 0.42, 1) 0.5s;
// `;
// const Tutotwo = styled.div`
//   width: 650px;
//   height: 700px;
//   background: url('/media/page/Howtoplay2_website.png');
//   background-size: contain;
//   background-repeat: no-repeat;
//   position: relative;
//   animation: fadeIn cubic-bezier(0.28, 0.84, 0.42, 1) 0.5s;
// `;

export default Header;

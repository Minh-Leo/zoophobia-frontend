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
                  <Tutoone></Tutoone>
                  <Tutotwo></Tutotwo>
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
const Tutoone = styled.div`
  width: 650px;
  height: 700px;
  background: url('/media/page/Howtoplay1_website.png');
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  animation: fadeIn cubic-bezier(0.28, 0.84, 0.42, 1) 0.5s;
`;
const Tutotwo = styled.div`
  width: 650px;
  height: 700px;
  background: url('/media/page/Howtoplay2_website.png');
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  animation: fadeIn cubic-bezier(0.28, 0.84, 0.42, 1) 0.5s;
`;

export default Header;

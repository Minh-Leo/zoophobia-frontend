import React from 'react';
import socket from '../socketConfig';
// import useSound from 'use-sound';

import styled from 'styled-components';

const CardMatchingScreen = ({
  nickName,
  backResp,
  backPrompt,
  onContinue,
  player,
  gameID,
}) => {
  // const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.1 });

  let matched = false;
  if (backResp.replace('resp-', '') === backPrompt.replace('prompt-', '')) {
    matched = true;
  } else {
    matched = false;
  }

  let playerData = { player, gameID };
  const onRoundFinished = () => {
    console.log('next round');
    // socket.emit('remove-matching-screen', gameID);
    socket.emit('new-round', { playerData });
  };

  return (
    <ModalScreen>
      {nickName !== null ? <h1 style={{ color: '#fff' }}>{nickName}</h1> : null}
      <div className='flex-horizontal'>
        <CardDiv className='text-center'>
          <BackImg>
            {backResp !== null ? (
              <img src={`/media/${backPrompt}.png`} alt='' />
            ) : null}
          </BackImg>
        </CardDiv>
        <CardDiv className='text-center'>
          <BackImg>
            {backResp !== null ? (
              <img src={`/media/${backResp}.png`} alt='' />
            ) : null}
          </BackImg>
        </CardDiv>
      </div>
      {matched ? (
        <Message>{nickName} have 1 point</Message>
      ) : (
        <Message>{nickName} don't have point</Message>
      )}
      <button
        type='button'
        onClick={() => {
          onContinue();
          onRoundFinished();
        }}
        className='btn btn-warning btn-lg mr-3 shadow-1'
      >
        Continue to next round
      </button>
    </ModalScreen>
  );
};

const ModalScreen = styled.div`
  width: 99vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000bb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
const CardDiv = styled.div`
  width: 400px;
  margin: 10px;
  position: relative;
  transition: 0.3s ease all;

  animation: fadeIn cubic-bezier(0.28, 0.84, 0.42, 1) 0.5s;
`;
const BackImg = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Message = styled.h2`
  color: #fff;
`;

export default CardMatchingScreen;

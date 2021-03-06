import React from 'react';

import styled from 'styled-components';

const CardMatchingScreen = ({
  gameID,
  promptNo,
  cardCzar,
  animationMatching,
  animationMatchingCards,
  onRoundFinished,
}) => {
  let matched;
  if (
    animationMatchingCards[1].replace('resp-', '') ===
    animationMatchingCards[2].replace('prompt-', '')
  ) {
    matched = true;
  } else {
    matched = false;
  }

  // cardCheck();

  return (
    <ModalScreen className='text-center'>
      {animationMatchingCards[0] !== '' ? (
        <h1 style={{ color: '#fff' }}>{animationMatchingCards[0]}'s card</h1>
      ) : null}
      {cardCzar ? (
        <button
          type='button'
          onClick={onRoundFinished}
          className='btn btn-warning btn-lg mt-3 shadow-1'
        >
          Continue to{' '}
          {promptNo === 1
            ? 'Score Board'
            : promptNo === 2
            ? 'Final Round'
            : `Round ${14 - promptNo}`}
        </button>
      ) : null}
      <div className='flex-horizontal'>
        <CardDiv className='text-center bouncing'>
          <BackImg>
            {animationMatchingCards[2] !== '' ? (
              <img src={`/media/${animationMatchingCards[2]}.jpg`} alt='' />
            ) : null}
          </BackImg>
        </CardDiv>
        <CardDiv className='text-center bouncing'>
          <BackImg>
            {animationMatchingCards[1] !== '' ? (
              <img src={`/media/${animationMatchingCards[1]}.jpg`} alt='' />
            ) : null}
          </BackImg>
        </CardDiv>
      </div>
      {matched ? (
        <Message>
          Hooray, that was a great response! Your team gets 1 point!
          {/* {animationMatchingCards[0]} */}
        </Message>
      ) : (
        <Message>
          Oops, the response you chose doesn’t match the prompt! Better luck
          next time!
        </Message>
      )}
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

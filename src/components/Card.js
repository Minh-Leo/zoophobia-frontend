import React from 'react';
// import socket from '../socketConfig';
import useSound from 'use-sound';

import styled from 'styled-components';

const Card = ({ card, size, onClick }) => {
  const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.25 });

  return (
    <CardDiv
      className='bouncing'
      style={{ width: `${size}px` }}
      onClick={() => onClick(card)}
      onMouseEnter={() => hoverSound()}
    >
      <FrontImg>
        {card ? <img src={`/media/${card.frontImg}.jpg`} alt='' /> : null}
      </FrontImg>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  margin: 0 -20px;
  position: relative;
  // width: 100px;
  transition: 0.3s ease all;

  animation: bounce cubic-bezier(0.28, 0.84, 0.42, 1) 0.5s;

  &:nth-child(odd) {
    margin: -5px -20px;
  }

  &:hover {
    transform: scale(2.2) translateY(-40px);
    // margin-top: -50px;
    z-index: 10;
  }
`;
const FrontImg = styled.div`
  border: 1px dashed #292929;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Card;

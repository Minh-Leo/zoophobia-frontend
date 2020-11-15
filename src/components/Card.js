import React from 'react';
// import socket from '../socketConfig';

import styled from 'styled-components';

const Card = ({ card, size, onClick }) => {
  return (
    <CardDiv style={{ width: `${size}px` }} onClick={() => onClick(card)}>
      <FrontImg>
        {card ? <img src={`/media/${card.frontImg}.png`} alt='' /> : null}
      </FrontImg>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  // background: url('/media/resp1.png');
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position: center;
  // width: 150px;
  // margin: 0.5em;

  // copy part
  margin: 0 -25px;
  position: relative;
  width: 100px;
  transition: 0.5s ease all;

  // End copy

  &:hover {
    transform: scale(2);
    margin-top: -50px;
    z-index: 10;
  }
`;
const FrontImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Card;

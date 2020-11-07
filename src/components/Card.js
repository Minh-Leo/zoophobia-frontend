import React from 'react';
import socket from '../socketConfig';

import styled from 'styled-components';

const CardDiv = styled.div`
  // background: url('/media/resp1.png');
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position: center;
  // width: 100px;
  // margin: 0.5em;

  // copy part
  margin: 0 -25px;
  position: relative;
  width: 100px;
  &:after {
    bottom: 0;
    content: '';
    left: -60px;
    position: absolute;
    right: -60px;
    top: 0px;
    z-index: 10;
  }

  // End copy

  &:hover {
    transform: scale(1.2);
    border: 1px solid blue;
  }
`;
const FrontImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const Card = ({ card, img, onClick }) => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   // console.log(userInput);
  //   socket.emit('card-chosen-by-player', card);
  // };

  return (
    <CardDiv onClick={() => onClick(card)}>
      <FrontImg>
        <img src={img} alt='' />
      </FrontImg>
    </CardDiv>
  );
};

export default Card;

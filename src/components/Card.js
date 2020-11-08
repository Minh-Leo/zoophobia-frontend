import React from 'react';
// import socket from '../socketConfig';

import styled from 'styled-components';

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
    transform: scale(1.5);
    margin-top: -50px;
    border: 1px solid blue;
    z-index: 10;
  }
`;
const FrontImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const Card = ({ card, img, size, onClick }) => {
  // const onClick = (e) => {
  //   e.preventDefault();
  //   // console.log(userInput);
  //   socket.emit('card-chosen-by-player', card);
  // };

  return (
    <CardDiv style={{ width: `${size}px` }} onClick={() => onClick(card)}>
      <FrontImg>
        <img src={img} alt='' />
      </FrontImg>
    </CardDiv>
  );
};

export default Card;

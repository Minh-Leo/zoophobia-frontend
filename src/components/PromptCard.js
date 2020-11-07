import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  // background: url('/media/promt1.png');
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position: center;
  width: 200px;
  // height: 300px;
  margin: 2em;
  position: absolute;
  top: 10%;
  left: 40px;
  z-index: 10;

  &:hover {
    background: white;
  }
`;
const FrontImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

function PromptCard({ card, img }) {
  return (
    <CardDiv>
      <FrontImg>
        <img src={img} alt='' />
      </FrontImg>
    </CardDiv>
  );
}

export default PromptCard;

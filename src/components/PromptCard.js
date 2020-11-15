import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 280px;
  position: absolute;
  top: 20px;
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

function PromptCard({ card }) {
  return (
    <CardDiv>
      <FrontImg>
        <img src={`/media/${card.frontImg}.png`} alt='' />
      </FrontImg>
    </CardDiv>
  );
}

export default PromptCard;

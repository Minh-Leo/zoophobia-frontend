import styled from 'styled-components';

export const CornerLeft = styled.div`
  background: url('/media/decoration/bush3.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  width: 40vw;
  height: 300px;
  position: fixed;
  bottom: -5px;
  left: -5px;
`;

export const CornerTopLeft = styled.div`
  background: url('/media/decoration/bush1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  width: 30vw;
  height: 400px;
  position: fixed;
  top: -5px;
  left: -5px;
  // transition: 0.4s ease all;
  // // -webkit-animation: bounce 1.2s 1 forwards;
  // // -moz-animation: bounce 1.2s 1 forwards;
  // // -ms-animation: bounce 1.2s 1 forwards;
  // animation: fadeIn 0.8s forwards;
`;

export const CornerRight = styled.div`
  background: url('/media/decoration/bush4.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  width: 35vw;
  min-height: 30vh;
  height: 600px;
  position: fixed;
  bottom: -10px;
  right: -15px;
  // transition: 0.4s ease all;
  // // -webkit-animation: bounce 1.2s 1 forwards;
  // // -moz-animation: bounce 1.2s 1 forwards;
  // // -ms-animation: bounce 1.2s 1 forwards;
  // animation: fadeIn 0.8s forwards;
`;

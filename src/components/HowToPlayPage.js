import React from 'react';
import styled from 'styled-components';
// import useSound from 'use-sound';

import { CornerTopLeft, CornerRight } from './Corner';
import Header from './Header';

const HowToPlayPage = () => {
  // const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.25 });
  // const [clickSound] = useSound('/media/sfx/btnSound.mp3', { volume: 0.15 });

  return (
    <>
      <Header />
      <Page className=''>
        <div className='col-md-12 text-center'>
          {/* <img
            className='bouncing'
            src='/media/page/Howtoplay1_website.png'
            alt=''
          />
          <img
            className='bouncing'
            src='/media/page/Howtoplay2_website.png'
            alt=''
          /> */}

          <Description className='shadow-1 bouncing'>
            <h1 className='stroke'>Starting the game</h1>
            <p>
              1. Once you have organised your friends to play Zoophobia online
              together, choose one person to be a "Game Creator". <br />
              2. As the Game Creator, you click "Create Game" on the Home page,
              choose a nickname and send the game code to the other players.
              Don’t click "Start game" until all players have joined! <br />
              3. As a player, you click "Join Game" on the Home page, paste the
              game code into the ‘Enter Game ID’ box and choose a nickname.{' '}
              <br />
              4. Once all players have joined the game, the Game Creator can
              click "Start Game".
            </p>
            <h1 className='stroke'>Playing the game</h1>
            <p>
              1. Players are each dealt a random hand of Response cards (cards
              at the bottom of the screen). <br />
              2. A total of 12 Prompt cards (the card at the top left of the
              screen) will appear throughout the game. Players must read the
              scenarios on each Prompt card and nominate 1 Response card from
              their hand that best suits. This is done by clicking on the card,
              and you can also change your selected response by clicking on
              another card in your hand. <br />
              3. Once all players have nominated a Response card, players can
              use the chat function (and/or other tele- or video-conferencing)
              to discuss which nominated Response card they wish to submit as a
              team. Remember, this is a cooperative game so work together to
              find the best response! <br />
              4. When it’s your turn (this will be written on the top right of
              the screen), you must click "Choose" on the card that your team
              decides is the best response. <br />
              5. Correct responses result in a matching grocery item (1 point)
              that will show up in players’ shopping carts. <br />
              6. If the team creates 7 grocery matches by the end of the game,
              you all win!
            </p>
          </Description>
          {/* <div className={styles.pageWrap}>
         <iframe src="https://drive.google.com/file/d/1nzULAuR-kROqUHt3O0EaNv5azArhijEk/preview" width="640" height="480"></iframe>
        </div> */}
        </div>

        <CornerTopLeft />
        <CornerRight />
      </Page>
    </>
  );
};

const Page = styled.div`
  position: relative;
  overflow: auto;

  & .text-center {
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & img {
    height: 70vh;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  }
`;
const Description = styled.div`
  width: 70%;
  font-size: 20px;
  margin-top: 2em;
  padding: 1em 2em;
  color: #3c3c3c;
  text-align: left;
  background: #ffc10799;
  border-radius: 30px;
`;
export default HowToPlayPage;

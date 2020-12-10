import React from 'react';
import styled from 'styled-components';
// import useSound from 'use-sound';

import { CornerTopLeft, CornerRight } from './Corner';
import Header from './Header';

const AboutPage = () => {
  // const [hoverSound] = useSound('/media/sfx/btnLight.wav', { volume: 0.25 });
  // const [clickSound] = useSound('/media/sfx/btnSound.mp3', { volume: 0.15 });

  return (
    <>
      <Header />
      <Page className=''>
        <div className='col-md-12 text-center'>
          <img
            className='bouncing'
            src='/media/page/CreatorsNote_website.png'
            alt=''
          />
          <img
            className='bouncing'
            src='/media/page/TheTeam_website.png'
            alt=''
          />
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

export default AboutPage;

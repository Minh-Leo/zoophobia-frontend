import React from 'react';
import styled from 'styled-components';

import { CornerTopLeft, CornerRight } from './Corner';
import Header from './Header';

const ForTeachersPage = () => {
  return (
    <>
      <Header />
      <Page className=''>
        <div className='col-md-12 text-center'>
          <div className='bouncing'>
            <iframe
              className='shadow-1'
              src='https://drive.google.com/file/d/1nzULAuR-kROqUHt3O0EaNv5azArhijEk/preview'
              title='for Teachers'
              width='1100'
              height='800'
            ></iframe>
          </div>
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
// const Description = styled.div`
//   width: 60%;
//   font-size: 20px;
//   margin-top: 2em;
//   padding: 1em 2em;
//   color: #3c3c3c;
//   text-align: left;
//   background: #ffc10788;
//   border-radius: 30px;
// `;
export default ForTeachersPage;

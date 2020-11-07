import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../socketConfig';

const ChatComponent = ({ player }) => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // socket.on('your id', (id) => {
    setYourID(player.socketID);
    // });

    socket.on('message', (message) => {
      console.log('chat from id: ', player.socketID);
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message) {
    setMessages((oldMsgs) => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage('');
    socket.emit('send message', messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <ChatBox>
      <MessagesContainer>
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <MyRow key={index}>
                <User>{message.id}</User>
                <MyMessage>{message.body}</MyMessage>
              </MyRow>
            );
          }
          return (
            <PartnerRow key={index}>
              <User>{message.id}</User>
              <PartnerMessage>{message.body}</PartnerMessage>
            </PartnerRow>
          );
        })}
      </MessagesContainer>
      <Form onSubmit={sendMessage}>
        <TextArea
          value={message}
          onChange={handleChange}
          placeholder='Say something...'
        />
        <Button>Send</Button>
      </Form>
    </ChatBox>
  );
};

const ChatBox = styled.div`
  display: flex;
  height: 90vh;
  width: 20vw;
  align-items: flex-end;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: auto;
  border: 15px solid #d3864a;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
  background: #f9f5f0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background: #f9f5f0;
  border: 1px solid #6c6c6c;
  outline: none;
  color: #6c6c6c;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: #6c6c6c;
  }
`;

const Button = styled.button`
  background-color: #fff;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
  font-size: 17px;

  &:hover {
    background-color: #222;
  }
`;

const Form = styled.form`
  width: 100%;
  border: 15px solid #d34a88;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

const User = styled.div`
  width: 10%;
  font-size: 12px;
  color: red;
  overflow: hidden;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: #fff;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-end;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: #6c6c6c;
  border: 1px solid #6c6c6c;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

export default ChatComponent;

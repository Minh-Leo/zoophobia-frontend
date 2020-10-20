import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';

const ChatComponent = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on('your id', (id) => {
      setYourID(id);
    });

    socketRef.current.on('message', (message) => {
      console.log('here');
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
    socketRef.current.emit('send message', messageObject);
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
  height: 100vh;
  width: 100%;
  align-items: flex-end;
  flex-direction: column;
  background-color: #3c3c3c;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 100%;
  overflow: auto;
  width: 400px;
  border: 1px solid #6c6c6c;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
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
  width: 400px;
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
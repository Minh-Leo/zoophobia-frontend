import io from 'socket.io-client';

// const zoophobia = 'https://zoopobia.herokuapp.com/';

const socket = io('http://localhost:3001');
// const socket = io(zoophobia);
export default socket;

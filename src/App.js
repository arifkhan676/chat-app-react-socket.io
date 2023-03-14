import './App.css';
import io from "socket.io-client";
import { useState } from 'react';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001"); //I first install socket.id from terminal for my front end(client)
//thn I should go server/index.js for coonnection backend in 21 line


function App() {

  const [username, setUsername] = useState(""); //take userinput in react automatically by useState;
  const [room, setRoom] = useState("");//take userinput in react automatically by useState;
  const [showChat,setShowChat]=useState(false); //boolean for join room and live chat

  const joinRoom= ()=>{
    if(username !== "" && room !== "" ){
        socket.emit("join_room", room); //  // used to send strings, numbers, objects or arrays to the client+        room as passing data in server index
    setShowChat(true);
      }
  };
  

  return (
    <div className="mainDiv">
      { !showChat ? (
      <div className='app'> 
      <h3 className='userName' > A chat</h3>
    <input className='inp' type="text" placeholder='Arif' onChange={(event)=>{
      setUsername(event.target.value)}} /> 
    <input className='inp'  type="text" placeholder='Room ID...'  onChange={(event)=>{
      setRoom(event.target.value)}}  />
    <button className='btn btn-dark' onClick={joinRoom} > Join Room </button>
      </div> )
      : (
      <div className='livechat'>
      <Chat socket={socket} username={username} room={room} />
      </div>
      )  }
    </div>
  );
}
//  above inputes onChange    // access user from target its value, input 

export default App;

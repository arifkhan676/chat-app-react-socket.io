import './App.css';
import io from "socket.io-client";
import { useState } from 'react';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001"); //I first install socket.id from terminal for my front end(client)
//thn I should go server/index.js for coonnection backend in 21 line


function App() {

  const [username, setUsername] = useState(""); //take userinput in react automatically by useState;
  const [room, setRoom] = useState("");//take userinput in react automatically by useState;
  
  const joinRoom= ()=>{
    if(username !== "" && room !== "" ){
        socket.emit("join_room", room); //room as passing data in server index
    }
  }

  return (
    <div className="App">
         <h3 className='userName' > A chat</h3>
    <input type="text" placeholder='Diba...' onChange={(event)=>{
      setUsername(event.target.value)}} /> 
    <input type="text" placeholder='Room ID...'  onChange={(event)=>{
      setRoom(event.target.value)}}  />
    <button onClick={joinRoom} > Join Room </button>
    
    <Chat socket={socket} username={username} room={room} />

    </div>
  );
}
//  above inputes onChange    // access user from input 

export default App;

import React, { useEffect, useState } from 'react';

function Chat({socket, username, room}){
   const [currentMessage, setCurrentMessage]=useState("");
  
   const sendMessage = async ()=>{ //async here synce the array 
      if(currentMessage !==""){
         const messageData = { //object that return what users see
            room:room, 
            author:username,
            message:currentMessage,
            time: new Date(Date.now()).getHours()+":"+ new Date(Date.now()).getMinutes(),
         };
        await socket.emit("send_message",messageData); 
       }
   }

   useEffect(()=>{
    socket.on("receive_message",(data)=>{
   console.log(data);
    });
   },[socket]);


 return (
    <div className='live'>
       <div className='chat-header'>
       <p>Live chat</p>
      </div>
      <div className='chat-header'>
      
      </div>
      <div className='chat-header'>
      <input type="text" placeholder='Hey...' onChange={(event)=>{
      setCurrentMessage(event.target.value)}}  />
      <button onClick={sendMessage}>&#9658;</button> 
      </div>
    </div>
 )
 ;   
}
export default Chat ;
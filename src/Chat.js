import React, { useEffect, useState } from 'react';

function Chat({socket, username, room}){
   const [currentMessage, setCurrentMessage]=useState("");
  const [messageList,setMessageList]=useState([]);

   const sendMessage = async ()=>{ //async here synce the array 
      if(currentMessage !==""){
         const messageData = { //object that return what users see
            room:room, 
            author:username,
            message:currentMessage,
            time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
         };
        await socket.emit("send_message",messageData); 
        setMessageList((list) => [...list, messageData]);
        setCurrentMessage("");
       }
   };
//have to work on this
   useEffect(()=>{
    socket.on("receive_message",(data)=>{
    setMessageList((list)=> [...list, data]);
   });
   },[socket]);


 return (
    <div className='live'>
       <div className='chat-header'>
       <p className='lc' >Live chat</p>
      </div>

      <div className='chat-body'>
         <div className='hire'>
         {messageList.map((messageContent) => {
       return <p className='cb' >{messageContent.message}</p>;
       })} 
         </div>
        </div>

      <div className='chat-footer'>
         <div className='posi' >
         <input className='fbtn' type="text" placeholder='Hey...' onChange={(event)=>{
      setCurrentMessage(event.target.value)}}  />
      <button className='fbt' onClick={sendMessage}>&#9658;</button> 
         </div>

      </div>
    </div>
 )
 ;   
}
export default Chat ;

/*
{messageList.map((messageContent) => {
       return <h3>{messageContent.message}</h3>;
       })} 
       */
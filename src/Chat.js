import React from 'react';

function Chat({socket, username, room}){
 return (
    <div>
       <div className='chat-header'>
       <p>Live chat</p>
      </div>
      <div className='chat-header'>
      
      </div>
      <div className='chat-header'>
      <input type="text" placeholder='Hey...' />
      <button>&#9658;</button>
      </div>
    </div>
 )
 ;   
}
export default Chat ;
import React from 'react';
import './Message.css'

const Message = ({message,username}) =>{
 const isUser= username === message.username;
  if(isUser){
    return(		
     <section>	
	  <div className='message__usercard'>
	   {message.message}
      </div>
     </section> 
	);}
  else{
  	return(
  	 <div className='message__guestcard'>	
	   {message.username} :{message.message}
     </div>
  		)
  }	
}

export default Message;
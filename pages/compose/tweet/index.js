import React, { useState } from 'react'
import AppLayout from '../../../Components/AppLayout/AppLayout'
import Button from '../../../Components/Button'
import useUser from '../../../hooks/useUser'
import { addSergit } from '../../../firebase/client';
import { useRouter } from 'next/router';

const COMPOSES_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}
export default function ComposeTweet() {
    const user = useUser();
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(COMPOSES_STATES.USER_NOT_KNOWN);
    const router = useRouter()

    const handleChange = (event) => {
        const value = event.target.value
        setMessage(value);
    };

    const handleSubmit = (event)=>{
      event.preventDefault();
      setStatus(COMPOSES_STATES.LOADING);
      addSergit({
        avatar: user.photoURL,
        message: message,
        uid:user.uid,
        username: user.displayName
      }).then(() => {
        setStatus(COMPOSES_STATES.SUCCESS);
        setMessage("");
        router.push("/home");

      }).catch((error) => {
        console.error("Error adding sergit:", error);
        setStatus(COMPOSES_STATES.ERROR);
      });

    }
    const isButtonDisabled = message.length === 0 || status === COMPOSES_STATES.LOADING;
  return (
   <>
   <AppLayout>
   
    <h1>Compose Tweet</h1>
    <form onSubmit={handleSubmit}>
      <textarea onChange={handleChange} 
        placeholder="What's happening?" 
        rows="4" 
        cols="50">
        
      </textarea>
      <div>
      
      <Button disabled={isButtonDisabled}>Sergitear</Button>
      </div>
    </form>
   </AppLayout>
   <style jsx>{`

      textarea {
        border: 0 ;
        padding: 15px;
        resize: none;
        font-size:21px;
        width:100%;
        outline: none;
      }

    `}
   </style>
   
   </>
  )
}

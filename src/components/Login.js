import React, { useRef } from 'react';

export default function Signup() {

  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <div className=''>
      <form className='w-full' action=''>
        <input className='block w-2/3 mb-3' type='email' placeholder='E-post' id='email' ref={emailRef} required />
        <input className='block w-2/3  mb-3' type='password' placeholder='Lösenord' id='password' ref={passwordRef} required />
        <button className='block w-1/5 border border-black bg-black text-white text-sm p-2' type='submit'>LOGGA IN</button>
      </form>
    </div>
  )
}

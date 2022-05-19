import React, { useRef } from 'react'
import { useAdmin, useAdminUpdate } from '../AdminContext'

export default function Login() {
  const isAdmin = useAdmin()
  const toggleAdmin = useAdminUpdate()
  
  // const emailRef = useRef()
  // const passwordRef = useRef()

  return (
    <div>
      <button onClick={toggleAdmin} className='block w-1/5 border border-black bg-black text-white text-sm p-2' type='submit'>
        {isAdmin ? <span>LOGGA UT</span> : <span >LOGGA IN</span>}
      </button>

      {/* <form className='w-full' action=''>
        <input className='block w-2/3 mb-3' type='email' placeholder='E-post' id='email' ref={emailRef} required />
        <input className='block w-2/3  mb-3' type='password' placeholder='Lösenord' id='password' ref={passwordRef} required />
        <button className='block w-1/5 border border-black bg-black text-white text-sm p-2' type='submit'>
          {loggedOut ? <span>LOGGA IN</span> : <span >LOGGA UT</span>}
        </button>
      </form> */}
    </div>
  )
}

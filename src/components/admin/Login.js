import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../services/firebase'
import { setLoading, login } from '../../store/reducers/user'

const Login = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.user.isLoading)
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setLoading(true))
    auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      const loggedInUser = userCredential.user.email
      dispatch(login(loggedInUser))
      dispatch(setLoading(false))
    })
    .catch((error) => {
      console.log(error)
      dispatch(setLoading(false))
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full'>
        <input 
          className='block w-2/3 mb-3'
          type='email' 
          placeholder='E-post' 
          id='email' 
          ref={emailRef} 
          required 
        />
        <input
          className='block w-2/3 mb-5'
          type='password' 
          placeholder='Lösenord' 
          id='password' 
          ref={passwordRef} 
          required 
        />
        <button 
          className='bg-kblightgray hover:bg-kbdarkgray text-white text-sm py-3 px-8' 
          type='submit'
          disabled={isLoading}
        >
          LOGGA IN
        </button>
    </form>
  )
}

export default Login

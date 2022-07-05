import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../services/firebase'
import { setLoading, logout } from '../../store/reducers/user'

const Logout = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.user.isLoading)

  const handleClick = () => {
    dispatch(setLoading(true))
    auth.signOut().then(() => {
      dispatch(logout()) 
      dispatch(setLoading(false))
    }).catch((error) => {
      console.log(error)
      dispatch(setLoading(false))
    })
  }

  return (
    <button 
      onClick={handleClick} 
      className='block w-1/5 border border-black bg-black text-white text-sm p-2'
      disabled={isLoading}
    >
      LOGGA UT
    </button>
  )
}

export default Logout

import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/reducers/auth'

const Dashboard = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <button 
        onClick={() => dispatch(login())} 
        className='block w-1/5 border border-black bg-black text-white text-sm p-2' 
        type='submit'
      >
        LOGGA UT
      </button>
    </div>
  )
}

export default Dashboard

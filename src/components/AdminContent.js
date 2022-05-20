import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleAdmin } from '../redux/user'

const AdminContent = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <h2 className='mb-3'>Hej Admin!</h2>
      <button 
        onClick={() => dispatch(toggleAdmin())} 
        className='block w-1/5 border border-black bg-black text-white text-sm p-2' 
        type='submit'
      >
        LOGGA UT
      </button>
    </div>
  )
}

export default AdminContent

import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()
  console.log(id)

  return (
    <div className='bg-white p-10'>
      <h1 className='font-bold text-3xl mb-5'>ProductDetails</h1>
    </div>
  )
}


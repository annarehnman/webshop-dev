import React from 'react'

export default function NotFound() {
  
  return (
    <div className='flex p-10'>
      <div className='w-2/3 pr-20'>
        <h1 className='font-bold text-6xl font-serif mb-14 space-y-2'>Sidan finns inte...</h1>
        <div className='space-y-5 mb-8'>
          <p>Ojdå, sidan du är ute efter verkar inte finnas! Du kan försöka igen via menyn, eller kontakta oss på <span className='font-bold'>info@kungsberg.se</span>.</p>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='p-10'>
      <div className='w-2/3 pr-20 mb-10'>
        <h1 className='font-bold text-5xl font-serif mb-10'>Vi på gården</h1>
        <div className='mb-3 space-y-3'>
          <p>Vi är oftast i trakten och du är vaölkommen att besöka oss, se till att ringa i förväg bara.</p>
          <div>
            <p className='font-bold'>Mats Rehnman</p>
            <p>070-928 27 60</p>
          </div>
          <div>
            <p className='font-bold'>Caroline Parneus</p>
            <p>073-581 07 36</p>
          </div>
          <p>info@kungsberg.com</p>
          <div>
            <p><FontAwesomeIcon icon={faFacebookSquare} className='mr-2' /> Facebook</p>
            <p><FontAwesomeIcon icon={faInstagram} className='mr-2' /> Instagram</p>
          </div>
        </div>     
      </div>
      <div className='mb-5'>
        <h2 className='font-bold text-xl font-serif'>Hitta hit</h2>
        <p>Kungsberg Gård</p>
        <p>Kungsberg 1</p>
        <p>645 92 Strängnäs</p>
      </div>
      <div className='w-full bg-gray-300 h-72'>
        karta
      </div>
    </div>
  )
}

export default Contact

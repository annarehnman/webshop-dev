import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='bg-white p-14'>
      <div className='w-2/3'>
        <div className='mb-6'>
          <h1 className='mb-6'>Vi på gården</h1>
          <p>Vi är oftast i trakten och du är välkommen att besöka oss, se till att ringa i förväg bara.</p>
        </div>
        <div className='space-y-4 mb-6'>
          <div>
            <h3>Mats Rehnman</h3>
            <a className='link' href="tel:+46709282760">070-928 27 60</a>
          </div>
          <div>
            <h3>Caroline Parneus</h3>
            <a className='link' href="tel:+46735810736">073-581 07 36</a>
          </div>
          <p><a className='link' href = "mailto: info@kungsberg.com">info@kungsberg.com</a></p>
        </div> 
        
        <div className='mb-6'>
          <h2>Följ oss på sociala medier</h2>
          <a className='block' href='https://www.facebook.com/ekologisktkott.narproduceratkott.kottlada'>
            <FontAwesomeIcon icon={faFacebookSquare} className='mr-2' /><span className='link'>Kungsberg Gård på Facebook</span>
          </a>
          <a className='block' href='https://www.instagram.com/kungsberggard/'>
            <FontAwesomeIcon icon={faInstagram} className='mr-2' /><span className='link'>Kungsberg Gård på Instagram</span>
          </a>
        </div>
        <div className='mb-3'>
          <h2>Hitta hit</h2>
          <p>Kungsberg Gård, Kungsberg 1</p>
          <p>645 92 Strängnäs</p>
        </div>
      </div>
      <div className='w-full bg-gray-300 h-96'>
        karta
      </div>
    </div>
  )
}

export default Contact

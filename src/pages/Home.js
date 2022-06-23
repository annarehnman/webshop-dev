import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/images/gard.jpg'

export default function Home() {

  return (
    <div className='flex'>
      <div className='w-2/3 pr-20 space-y-10'>
        <div className='space-y-2'>
          <h1 className='big-h1'>Välkommen</h1>
          <h1 className='big-h1'>till Kungsberg</h1>
        </div>
        <div className='space-y-5'>
          <p>Vid Mälarens strand en dryg mil från Strängnäs ligger Kungsberg Gård, här bedriver vi sedan snart 20 år tillbaka ekologiskt lantbruk.</p>
          <p>Vi tror på en hållbar miljö som speglas av respekt och ödmjukhet mellan djur och människa. Förutom lantbruket har vi kor, får och höns.</p>
          <p>Vår gårdsbutik är "öppen nästan jämnt" och vi säljer vårt fina grönbeteskött och ägg både på plats och via vår webbplats. Hör av dig innan du besöker oss bara så vi är hemma.</p>
        </div>
        <button className='border border-kbnearblack py-3 px-8 hover:bg-kbdarkgray hover:text-white'>
          <NavLink to={"/products"} >TILL BUTIKEN</NavLink>
        </button>
      </div>
      <div className='w-1/3 align-top'>
        <img className='object-contain' src={image} alt="gården" />
      </div>
    </div>
  )
}

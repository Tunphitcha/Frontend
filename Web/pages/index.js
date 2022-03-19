//import { Button } from 'bootstrap'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Pornthip from '../public/Pornthip.jpg'

export default function Home() {
  return (
    <div>

      <body>
        <p className='Title'>ระบบจัดการหอพักพรทิพย์</p>
        <img src="Pornthip.jpg" alt="Pornthip" width="1536" height="563"></img>
      </body>

      <style>{`

      div {
          text-align: left;
      }

      .Title {
        font-size: 60px;
        font-family: 'Kanit', sans-serif;
        color: #5463FF;
        text-align: center;
      }
      
      `}</style>

    </div>
  )
}

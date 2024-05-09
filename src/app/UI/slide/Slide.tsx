import React from 'react'
import { slide_dummy } from '@/json/slide_dummy'
import Hero from "../../../images/Concert.jpg"

// import Image from 'next/image'

import style from "./Slide.module.scss";
import { log } from 'console';
import Button from '../button/Button';
const Slide = () => {
  return (
    <>
      {
        slide_dummy.map((item) => (
          
          <div className={style.container} key={item.id} style={{
            background: `url(${item.image}) center center / cover no-repeat`,
            // backgroundImage: `url(${item.image})`,
            width: '1000px',
            height: '500px'
          }}>
            <h1>{item.heading}</h1>
            <p>{item.description}</p>
            <div className={style.buttoncontainer}>
              <Button text={item.btn1}/>
              <Button text={item.btn2} />

            </div>


          </div>
        ))
      }


    </>
  )
}

export default Slide;


// background: url(&quot;img/home/slide1.jpg&quot;) center center / cover no-repeat;
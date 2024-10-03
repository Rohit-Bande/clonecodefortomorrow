import React from 'react'
import style from './Mainstyle.module.css'
import myimages from './images/pexels-soldiervip-1386604.jpg'

const Box = ({title, body}) => {
  return (
    <>
      <div className={style.mainbox}>
         <img src={myimages} alt="" />
         <div className={style.textstyle}>
            <h1>{title}</h1>
            <p>{body}</p>
         </div>
      </div>
    </>
  )
}

export default Box

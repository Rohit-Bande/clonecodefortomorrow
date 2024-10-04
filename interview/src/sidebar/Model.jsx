import React from 'react'
import style from './Sidebarstyle.module.css'

const Model = ({myModal}) => {
  return (
    <>
       <div className={style.modalWrapper}></div>
       <div className={style.modalContainer}>
        <h1>Rohit</h1>
        <button onClick={myModal}>close</button>
       </div>
    </>
  )
}

export default Model

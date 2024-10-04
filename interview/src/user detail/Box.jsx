import React from 'react'
import style from './User.module.css'

const Box = (props) => {
const {name, developer, image} = props

  return (
    <div>
       <div className={style.box}>
            <h1>{name}</h1>
            <h2>{developer}</h2>
            <div className={style.userimg}>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Box

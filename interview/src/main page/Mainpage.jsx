import React from 'react'
import style from './Main.module.css'
import Sidebar from '../sidebar/Sidebar'
import Mainfile from '../mainsection/Mainfile'

const Main = () => {
  return (
    <>
      <div className={style.mainContainer}>
         <Sidebar />
         <Mainfile />
      </div>
    </>
  )
}

export default Main

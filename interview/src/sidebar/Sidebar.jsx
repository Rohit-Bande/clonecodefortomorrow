import React from 'react'
import style from './Sidebarstyle.module.css'
import image from "./images/medium.webp"
import { TiFolderOpen } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  return (
    <>
      <div className={style.mainSideBar}>
         <div className={style.subcontainer}>
             <div className={style.myprofile}>
                 <img src={image} alt="" />
                 <div className={style.textstyle}>
                 <h2>Rohit</h2>
                 <p>this is me</p>
                 </div>
             </div>

             <div className={style.mytoggle}>
                  <p>this is toggle</p>
                 <div className={style.togglebtn}>
                 <button className={style.iconSpacing}>
                   <TiFolderOpen  />
                 </button>
                 <button className={style.secbtn}>
                   <GiHamburgerMenu  />
                 </button>
                 </div>
             </div>

             <div className={style.openform}>
                  <p>this is toggle</p>
                 <button className={style.mybtn}>
                  Open form
                 </button>
             </div>
         </div>
      </div>
    </>
  )
}

export default Sidebar

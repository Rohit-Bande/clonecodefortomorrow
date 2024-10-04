import React, { useState } from 'react'
import style from './Sidebarstyle.module.css'
import image from "./images/medium.webp"
import { TiFolderOpen } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import Model from './Model';

const Sidebar = ({onToggle}) => {

  const [openModal, setOpenModal] = useState(false)
  
  const handleModal = () => {
    setOpenModal(!openModal)
  }
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
                  <div onClick={onToggle}>
                 <div className={style.togglebtn} >
                 <button className={style.iconSpacing}>
                   <TiFolderOpen  />
                 </button>
                 <button className={style.secbtn}>
                   <GiHamburgerMenu  />
                 </button>
                 </div>
                 </div>
             </div>

             <div className={style.openform}>
                  <p>this is toggle</p>
                 <button className={style.mybtn} onClick={handleModal}>
                  Open form
                 </button>
             </div>

           {openModal && <Model myModal={handleModal} />}

         </div>
      </div>
    </>
  )
}

export default Sidebar

import React from 'react'
import style from './User.module.css'
import myimages from './images/360_F_622691912_UqnMQAWYxUGeXBmzg2CFUdCCx6MVyG0B.jpg'
import Box from './Box'

const Userdetails = () => {
  return (
    <>
      <div className={style.usercontainer}>
      <Box name="Rohit" developer="React JS devloper Lorem ipsum dolor sit amet." image={myimages}/>
      <Box name="Rohit" developer="React JS devloper Lorem ipsum dolor sit amet." image={myimages}/>
      <Box name="Rohit" developer="React JS devloper Lorem ipsum dolor sit amet." image={myimages}/>
      <Box name="Rohit" developer="React JS devloper Lorem ipsum dolor sit amet." image={myimages}/>
      <Box name="Rohit" developer="React JS devloper Lorem ipsum dolor sit amet." image={myimages}/>
      <Box name="Rohit" developer="React JS devloper Lorem ipsum dolor sit amet." image={myimages}/>
      </div>
    </>
  )
}

export default Userdetails

import React, { useEffect, useState } from 'react'
import style from './Main.module.css'
import Sidebar from '../sidebar/Sidebar'
import Mainfile from '../mainsection/Mainfile'
import Userdetails from '../user detail/Userdetails'

const Main = () => {

  const [loading, setLoading] = useState(true)
  const [showPage, setShowPage] = useState(true)

  const myLoadingFun = () => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }

  useEffect(() => {
    myLoadingFun()
  }, [])

  const handleToggle = () => {
     setShowPage(prev => !prev)
  }

  return (
    <>
      <div className={style.mainContainer}>
         <Sidebar onToggle={handleToggle} />
         {loading ? <h1 className={style.loading}>Loading...</h1> :
          (<div>
            {showPage ? <Mainfile /> : <Userdetails />}
          </div>)
         }
      </div>
    </>
  )
}

export default Main

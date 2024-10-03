import React, { useEffect } from 'react'
import style from './Mainstyle.module.css'
import Box from './Box'
import axios from 'axios'
import { useState } from 'react'

const API = "https://jsonplaceholder.typicode.com/posts"

const Mainfile = () => {

    const [myData, setMyData] = useState([])

    const getMyData = async() => {
       try {
        const res = await axios.get(API)
        setMyData(res.data)
       } catch (error) {
        console.log(error);
       };
    }

    useEffect(() => {
        getMyData()
    }, [])
  return (
    <div className={style.mainFile}>
    {
        myData.map((item, id) => {
           return (<Box title={item.title} body={item.body} key={id} />)
        })
    }
      
    </div>
  )
}

export default Mainfile

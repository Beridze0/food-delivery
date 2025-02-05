import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { FiCalendar } from "react-icons/fi";

const dateNow = () =>{
    return moment().format('DD/MM/YYYY HH:mm:ss')
}

const HeaderDate = () => {


    const [time ,setTime] = useState(dateNow)

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setTime(dateNow)
        },1000)

        return () => {clearInterval(timerId)}

    },[])

  return (
   <div className='header-date'>
        <FiCalendar size={20} />
        <span>{time}</span>
    </div>
  )
}

export default HeaderDate
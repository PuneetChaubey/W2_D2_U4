import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(10)

useEffect(() => {
  const id = setInterval(()=>{
  if(timer>=100){
      clearInterval(id);
  }
  else{
      setTimer((prev)=>prev+1)
  }

  },1000)

  return () => {
    clearInterval(id);
  }
}, [timer])


  return (
    <div>Timer: {timer}</div>
  )
}

export default Timer
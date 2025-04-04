import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

const MsgPage = () => {
  const params=useParams()
  const navigate=useNavigate()
  useEffect(()=>{
    if(params.name.length<2){
      navigate("/",{replace:true})

    }
  },[params.name])
  return (
    <div>
      <h1>
        {params.name} Wishes You
      </h1>
      <h1>Happy Navratri</h1>

    </div>
  )
}

export default MsgPage

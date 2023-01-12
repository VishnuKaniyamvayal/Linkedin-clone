import { Avatar } from '@mui/material'
import React from 'react'
import "./Option.css"


function Option({avatar, Icon,title}) {
  return (
    <div className='option'>
        {Icon && <Icon className="option__icon"/>}
        {avatar && <Avatar className="option__icon" src={avatar}/>}
        <h3 className='option__title'>{title}</h3>

    </div>
  )
}

export default Option
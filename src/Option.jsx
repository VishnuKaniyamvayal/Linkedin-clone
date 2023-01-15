import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectuser } from './features/userSlice'
import "./Option.css"


function Option({avatar, Icon,title,onClick})
{
const user = useSelector(selectuser)

  return (
    <div onClick={onClick} className='option'>
        {Icon && <Icon className="option__icon"/>}
        {avatar && <Avatar className="option__icon" >{user?.email[0]}</Avatar>}
        <h3 className='option__title'>{title}</h3>

    </div>
  )
}

export default Option
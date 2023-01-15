import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import Option from './Option';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import {logout, selectuser } from "./features/userSlice"

const Header = () => {

  const dispatch = useDispatch()

  const user = useSelector(selectuser)

  const logOutOfApp = ()=>{
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>

      <div className="header__left">
      <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
        <div className="header__search">
          <SearchIcon/>
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
          <Option title="Home" Icon={HomeIcon}/>
          <Option title="network" Icon={PeopleIcon}/>
          <Option title="jobs" Icon={WorkIcon}/>
          <Option title="messaging" Icon={MessageIcon}/>
          <Option title="notifications" Icon={NotificationsIcon}/>
          <Option avatar={true} title="me"  onClick={logOutOfApp}/>
      </div>
    
    </div>
  )
}

export default Header
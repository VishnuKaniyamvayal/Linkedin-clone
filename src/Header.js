import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import Option from './Option';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
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
          <Option title="me" avatar="https://media.licdn.com/dms/image/D5635AQHgDtJUI3F4Xw/profile-framedphoto-shrink_400_400/0/1669873270820?e=1674118800&v=beta&t=Waw2va4-bJ6Qk5Ve05vo0gziDqm0SIMqerI-Pu6lyQw" />
      </div>
    
    </div>
  )
}

export default Header
import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {

    const recentItem = (topic)=>{return(
        <div className="recent__item">
            <span className='recent__item__hash'>#</span>
            <p>{topic}</p>
            
        </div>)
        }
    


  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <Avatar className='sidebar__avatar'></Avatar>
            <h2>Vishnu v</h2>
            <h3>Vishnujishnu0987@gmail.com</h3>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className='sidebar__statnumber'>12312</p>
                
            </div>
            <div className="sidebar__stat">
                <p>views on post</p>
                <p className='sidebar__statnumber'>12312</p>
                
            </div>
        </div>
            <div className="sidebar__bottom">
                <p>Recent</p>

                {recentItem("createEpic")}
                {recentItem("createSomething")}
                {recentItem("createSpecific")}
                {recentItem("createElse")}
                {recentItem("createVideo")}
            </div>

    </div>
  )
}

export default Sidebar
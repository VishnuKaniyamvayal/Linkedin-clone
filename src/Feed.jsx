import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./Feed.css"
import ImageIcon from '@mui/icons-material/Image';
import Inputoption from './Inputoption';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';

const Feed = () => {
    const [posts, setPosts] = useState([])

    const sendPost = (e)=>{
        e.preventDefault();
        
    }

  return (
    <div className='feed'>

        <div className="feed__input__container">
            <div className="feed__input">
                <CreateIcon className='create__icon'/>
                <form action="">
                    <input type="text"  className='form__input'/>
                    <button type='submit' className='form__submit__button' onClick={sendPost} >Post</button>
                </form>
            </div>
            <div className="feed__input__option">
                <Inputoption color="#70B5F9" Icon={ImageIcon} title="Image"/>
                <Inputoption color="#E7A33E" Icon={VideocamIcon} title="Video"/>
                <Inputoption color="#C0CBCD" Icon={EventAvailableIcon} title="Event"/>
                <Inputoption color="#7FC15E" Icon={NewspaperIcon} title="Article"/>
            </div>
        </div>
        {posts.map(()=><Post/>)}
        <Post name="Vishnu" description="this is nothing " message="this workeed"></Post>
    </div>
  )
}

export default Feed
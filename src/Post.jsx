import { Avatar } from '@mui/material'
import React from 'react'
import Inputoption from './Inputoption';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import "./Post.css"
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendIcon from '@mui/icons-material/Send';

const Post = ({name, description, message, photoUrl}) => {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar/>
            <div className="post__info">
                <h2>Vishnu v</h2>
                <p>description</p>
            </div>

        </div>
        <div className="post__body">
            <p>message goes here</p>
        </div>
        <div className="post__buttons">
            <Inputoption Icon={ThumbUpOffAltIcon} title="like" color="gray"/>
            <Inputoption Icon={ ChatBubbleOutlineIcon} title="comment" color="gray"/>
            <Inputoption Icon={MobileScreenShareIcon} title="share" color="gray"/>
            <Inputoption Icon={SendIcon} title="send" color="gray"/>
        </div>
    </div>
  )
}

export default Post
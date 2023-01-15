import { Avatar } from '@mui/material'
import React,{forwardRef} from 'react'
import Inputoption from './Inputoption';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import "./Post.css"
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendIcon from '@mui/icons-material/Send';
const Post = forwardRef(({name, description, message, photoUrl},ref) => {
  
  
    return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <Inputoption Icon={ThumbUpOffAltIcon} title="like" color="gray"/>
            <Inputoption Icon={ ChatBubbleOutlineIcon} title="comment" color="gray"/>
            <Inputoption Icon={MobileScreenShareIcon} title="share" color="gray"/>
            <Inputoption Icon={SendIcon} title="send" color="gray"/>
        </div>
    </div>
  )
})

export default Post
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./Feed.css"
import ImageIcon from '@mui/icons-material/Image';
import Inputoption from './Inputoption';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")
    const user = useSelector(selectuser)


  useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data(),
            })))
        ))
  },[])


    const sendPost = (e)=>{
        e.preventDefault();
        db.collection("posts").add({
            name:user.displayName,
            description: user.email,
            message:input,
            photoUrl:user.photorl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), 

        } )
        setInput("")

        
    }

  return (
    <div className='feed'>

        <div className="feed__input__container">
            <div className="feed__input">
                <CreateIcon className='create__icon'/>
                <form action="">
                    <input value={input} type="text" onChange={e=>{setInput(e.target.value)}}  className='form__input'/>
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
        {posts.map(({id, data: {name ,description, message, photoUrl}})=><Post
        key={id}
        name={name}
        description = {description}
        message={message}
        photoUrl= {photoUrl}
        />)}
        
    </div>
  )
}

export default Feed
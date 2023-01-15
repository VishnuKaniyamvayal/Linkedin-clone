import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import "./Login.css"
import {login as ulog} from "./features/userSlice"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [profilepic,setProfilepic] = useState("")
    const disptach = useDispatch()

    const register = (e)=>{
       e.preventDefault() 
       if(!name){
        return ( window.alert("please enter full name"))
       }
    
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilepic,
            }).then(()=>{
                disptach(ulog({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilepic,

                }))
            })
        }).catch(err=>window.alert(err.message))
    }
    const login = (e)=>{
            e.preventDefault()
            auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
                disptach(ulog({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoUrl:userAuth.user.photoURL,
                }))
            }).catch(err=>window.alert(err.message))
    }
  return (
    <div className='login'>
        <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x281.png" alt="IMAGE ERROR" />

        <form action="">
            <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Full name (if registering)' />    
            <input value={profilepic} onChange={e=>setProfilepic(e.target.value)} type="text" placeholder="Profile pic URL (optional)" />
            <input value={email} onChange={e=>setEmail(e.target.value)}type="email" placeholder='Enter email' />
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='password' />
            <button type='submit' onClick={login}>Sign In</button>
        </form> 
        <p>not a member?<span className='login__register' onClick={register}>Register now</span></p>   
    </div>


  )
}

export default Login
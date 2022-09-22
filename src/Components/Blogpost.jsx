import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../BlogData'
import { useAuth } from '../Login/auth'

const Blogpost = () => {
    const {slug}=useParams();
    const navigate= useNavigate();
    const auth=useAuth();

    const onReturn=()=>{
      navigate(-1)
    }
     
     const Blogpost=blogdata.find(post=>post.title.split(' ').join('-')===slug);
     
     const admin=auth.userData?.isAdmin || Blogpost.author===auth.userData?.user;
     const editor=auth.userData?.isEditor || Blogpost.author===auth.userData?.user;
     const checker=auth.userData?.isChecker || Blogpost.author===auth.userData?.user;
  return (
    <>
     <h1>{Blogpost.title}</h1>
     <button onClick={onReturn}>{'Back'}</button>
     <p>{Blogpost.content}</p>
     <p>{Blogpost.author}</p>
     {admin && (
      <>
      <button className=' btn-warning'>Editar blog</button>
       <button className=' btn-danger'>Borrar blog</button>
      </>
      
      
     )}
     {editor&&(
      <button>Editar</button>
     )}
      {checker&&(
        <><textarea/>
      <button>Enviar revisión </button></>
        
     )}
    </>
  )
}

export  {Blogpost}
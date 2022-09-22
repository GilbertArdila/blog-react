import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from './../../BlogData'
import { useAuth } from '../../Login/auth'
import {revisiones}from '../../revisiones'
import './index.css'

const Blogpost = ({setModal,setBlog,blog}) => {
  
    const {slug}=useParams();
    const navigate= useNavigate();
    const auth=useAuth();

    //estado para la revisión del blog
    const [revision, setRevision] = React.useState('')

    const onReturn=()=>{
      navigate('/home')
    }

    const onEdit=()=>{
      setModal(true)
      setBlog(Blogpost)
    }
    const onDelete=(Blogpost)=>{
    
     const index=blogdata.findIndex(blog=>blog.title===Blogpost.title)
    
     blogdata.slice(index,1)
     console.log(blogdata)
    }

    const onCheck=({revision,Blogpost})=>{
      revisiones.push({"Contenido":revision,"Blog":Blogpost.title})
      setRevision('')
    }
    
      const Blogpost=blogdata.find(post=>post.title.split(' ').join('-')===slug);
    
     const admin=auth.userData?.isAdmin || Blogpost.author===auth.userData?.user;
     const editor=auth.userData?.isEditor || Blogpost.author===auth.userData?.user;
     const checker=auth.userData?.isChecker || Blogpost.author===auth.userData?.user;
  return (
    <div className='blogpost'>
     <h1>{Blogpost.title}</h1>
     
     <p className='blogpost-content'>{Blogpost.content}</p>
     <p className='blogopst-author'>{`Author:${' '}${Blogpost.author}`}</p>
     {admin && (
      <>
      { revisiones.map(revision=>(
        <div className='revisiones' key={revision.Blog}>
          <p>{`mensaje:${' '}${revision.Contenido}`}</p>
          <p>{`Blog:${' '}${revision.Blog}`}</p>
        </div>
      ))}
      <button className=' btn warning' onClick={onEdit}>Editar blog</button>
       <button
        className=' btn danger'
        onClick={()=>
          onDelete(Blogpost)
          }
        >Borrar blog</button>
      </>
      
      
     )}
     {editor&&(
      <button className='btn succes' onClick={onEdit}>Editar</button>
     )}
      {checker&&(
        <><textarea
        value={revision}
        onChange={(e)=>setRevision(e.target.value)}
        />
      <button 
      className='btn succes'
      onClick={()=>onCheck({revision,Blogpost})}
      >Enviar revisión </button></>
        
     )}
     <button className='btn succes' onClick={onReturn}>{'Back'}</button>
    </div>
  )
}

export  {Blogpost}
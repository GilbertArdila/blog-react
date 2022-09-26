import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../Login/auth'
import './index.css'
import {getData,postData,deletePost} from '../../Api/Services'

const Blogpost = ({setModal,setBlog}) => {
  
    const {slug}=useParams();
    const navigate= useNavigate();
    const auth=useAuth();


   

    /************************************************************* */
    //para obtener los blogpost
    const [blogdata, setBlogdata] = React.useState([])
   
   

    /********************************************************************** */
    //estado  y useEfect para la lectura de las revisiónes del blog cuando es admin
    const [revision, setRevision] = React.useState('')
    //useEffect para la revisión 
    React.useEffect(() => {
      getData('/revisiones',setRevision);
      getData('/blogdata',setBlogdata);
    }, []);
    /********************************************************************** */
    
    
    const onReturn=()=>{
      navigate('/blog')
    }
/************************************************** */
//para editar el post
    const onEdit=(id)=>{
      setModal(true)
      setBlog(Blogpost)
      navigate('/home')
      
      
    }
    /********************************************************************** */
    //para borrar algun blog
    const onDelete=(id)=>{
     deletePost(`/blogdata/${id}`)
     navigate('/home')
     
    }
    /********************************************************************** */

    /********************************************************************** */
    //para escribir nuevas revisiones de blog
    const [nuevaRevision, setNuevaRevision] = React.useState('');
    const onCheck=({nuevaRevision,Blogpost})=>{
      let data={
        Revision:nuevaRevision,
        Blog:Blogpost.title
      }
      if(nuevaRevision===''){
        alert('debes escribir algo en el campo de revisión para poder hacer el envío')
      }
      else{
        postData('/revisiones',data)
        setNuevaRevision('');
        navigate('/home')
        
      }
     
    }
  /********************************************************************** */
    let Blogpost;
   
   
   blogdata.forEach(blog=>{
     if(blog.title.split(' ').join('-')===slug)
      
      Blogpost=blog
    
    
   })
  
     const admin=auth.userData?.isAdmin || Blogpost?.author===auth.userData?.user;
     const editor=auth.userData?.isEditor || Blogpost?.author===auth.userData?.user;
     const checker=auth.userData?.isChecker || Blogpost?.author===auth.userData?.user;
  return (
    <div className='blogpost'>
     <h1>{Blogpost?.title}</h1>
     
     <p className='blogpost-content'>{Blogpost?.content}</p>
     <p className='blogopst-author'>{`Author:${' '}${Blogpost?.author}`}</p>

     {admin && (
      <>
      { revision.length && revision.map(rev=>(
        <div className='revisiones' key={rev.id}>
          <p>{`mensaje:${' '}${rev.Revision}`}</p>
          <p>{`Blog:${' '}${rev.Blog}`}</p>
        </div>
      ))}
      
       <button
        className=' btn danger'
        onClick={()=>
          onDelete(Blogpost.id)
          }
        >Borrar blog</button>
      </>
      
      
     )}
     {editor&&(
      <button className='btn succes' onClick={onEdit}>Editar</button>
     )}
      {checker&&(
        <div className='checker'><textarea
        className='checker-textarea'
        value={nuevaRevision}
        onChange={(e)=>setNuevaRevision(e.target.value)}
        />
      <button 
      className='btn succes'
      onClick={()=>onCheck({nuevaRevision,Blogpost})}
      >Enviar revisión </button></div>
        
     )}
     <button className='btn succes' onClick={onReturn}>{'Back'}</button>
    </div>
  )
}

export  {Blogpost}
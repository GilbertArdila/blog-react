import React from 'react'
import { Outlet } from 'react-router-dom'
import { BlogLink } from '../../Components'
import './index.css'
import {getData} from '../../Api/Services'
import { useAuth } from '../../Login/auth'



const Blog = () => {
  //para la historia de navegación
  const auth=useAuth();
  let  setNavHistory=auth.setNavHistory;
 
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData('/blogdata.json',setData) 
    setNavHistory(window.location.href)
  }, [])
  
  
   
  return (
    <div className='blog'>
    <h1>Blogs</h1>
    
    <ul>
      {data.length && data.map(post=>(
      <BlogLink post={post}
       key={post.title}
      />
    ))}
    </ul>
    <Outlet/>
    <div className='blog-image'/>
    </div>
    
  )
}

export {Blog}
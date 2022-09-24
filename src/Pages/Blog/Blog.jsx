import React from 'react'
import { Outlet } from 'react-router-dom'
import { BlogLink } from '../../Components'
import './index.css'
import {getData} from '../../Api/Services'



const Blog = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData('/blogdata',setData)
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
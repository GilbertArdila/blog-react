import React from 'react'
import { Outlet } from 'react-router-dom'
import { blogdata } from '../../BlogData'
import { BlogLink } from '../../Components'
import './index.css'
const Blog = () => {
  
  return (
    <div className='blog'>
    <h1>Blog</h1>
    <Outlet/>
    <ul>
      {blogdata.map(post=>(
      <BlogLink post={post}
       key={post.title}
      />
    ))}
    </ul>
    
    </div>
    
  )
}

export {Blog}
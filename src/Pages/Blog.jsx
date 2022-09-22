import React from 'react'
import { Outlet } from 'react-router-dom'
import { blogdata } from '../BlogData'
import { BlogLink } from '../Components/BlogLink'
const Blog = () => {
  
  return (
    <>
    <h1>Blog</h1>
    <Outlet/>
    <ul>
      {blogdata.map(post=>(
      <BlogLink post={post}
       key={post.title}
      />
    ))}
    </ul>
    
    </>
    
  )
}

export {Blog}
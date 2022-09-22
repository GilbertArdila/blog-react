import React from 'react'
import {Link} from 'react-router-dom'
const BlogLink = ({post}) => {
    
    const slug=post.title.split(' ').join('-')
  return (
    <li>
        <Link  to={`/blog/${slug}` }>{post.title}</Link>
    </li>
  )
}

export {BlogLink}
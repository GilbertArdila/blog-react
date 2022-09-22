import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
const BlogLink = ({post}) => {
    
    const slug=post.title.split(' ').join('-')
  return (
    <li className='bloglink-li'>
        <Link  to={`/blog/${slug}` }>{post.title}</Link>
    </li>
  )
}

export {BlogLink}
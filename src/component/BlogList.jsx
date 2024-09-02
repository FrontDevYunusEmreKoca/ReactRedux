import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = () => {
  return (
    <div>
      <p>Blog Page</p>
      <Link to="/blogs/1">BLOG 1</Link> |
      <Link to="/blogs/2">BLOG 2</Link> |
      <Link to="/blogs/3">BLOG 3</Link> |
    </div>
  )
}

export default BlogList;

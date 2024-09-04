import React from 'react'
import { Link } from 'react-router-dom';
import BlogList from './BlogList';

const BlogListPage = () => {
  return (
    <div>
      <p>Blog list</p>
      <BlogList />
      <Link to="/blogs/1">BLOG 1</Link> |
      <Link to="/blogs/2">BLOG 2</Link> |
      <Link to="/blogs/3">BLOG 3</Link> |
    </div>
  )
}

export default BlogListPage;

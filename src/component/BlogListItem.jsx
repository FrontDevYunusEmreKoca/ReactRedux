import React from 'react'

const BlogListItem = ({id,title}) => {
  return (
   <>   
    <li key={id}>{title}</li>
   </>
  )
}

export default BlogListItem

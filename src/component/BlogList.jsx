import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
    console.log(props)
  return (
    <ul>
        {props.bloklar.map(blog => {
            return <BlogListItem key = {blog.id} {...blog}/>
        })}
    </ul>
  )
}

const mapStateToProps = (state) => {
    return {
        bloklar:state.blogs
    }
}

//higher order component
export default connect(mapStateToProps)(BlogList)

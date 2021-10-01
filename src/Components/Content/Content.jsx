import React from 'react'
import BlogHolder from '../BlogHolder/BlogHolder'
import Post from '../Post/Post'
import './Content.scss'

function Content() {
    return (
        <div className='content'>
            <Post />
            <BlogHolder />
        </div>
    )
}

export default Content

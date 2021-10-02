import React from 'react'
import BlogHolder from '../BlogHolder/BlogHolder'
import Post from '../Post/Post'
import './Content.scss'
import Blogs from '../../data/Blogs'

export const BlogContext = React.createContext();


function Content() {
    return(        
        <>
            <BlogContext.Provider value={Blogs}>
                <div className='content'>
                    <Post />
                    <BlogHolder />
                </div>
            </BlogContext.Provider>
        </>
    )
}

export default Content

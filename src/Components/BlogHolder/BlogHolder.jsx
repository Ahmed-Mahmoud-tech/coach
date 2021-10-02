import React ,{useState , useEffect, useContext} from 'react'
import Blogs, {addblog} from '../../data/Blogs';
import {BlogContext} from '../Content/Content';



function BlogHolder() {
//...updatedblog.blog
    const updatedblog = useContext(BlogContext)
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            //setBlogs(data)
            console.log(blogs);
            addblog(data)
            setBlogs(updatedblog.blog)
            // console.log(updatedblog.blog);
        })


        updatedblog.newmethod = () => {
            setBlogs([...updatedblog.blog])
            console.log(updatedblog.blog)
        }

    },[])

    const handelDelete = (id)=>{
        const filteredBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(filteredBlogs)
        fetch(`http://localhost:8000/blogs/${id}` , {
            method : 'DELETE',
        })
        
    }


    return (
        <div>
            {blogs.map(blog => (
                <div key={blog.id}> 
                    <h2>{blog.title} </h2>
                    <p>{blog.body } </p>
                    <button  onClick={()=> handelDelete(blog.id)} >Delete Post</button>
                </div>
            ))}
        </div>
    )
}

export default BlogHolder

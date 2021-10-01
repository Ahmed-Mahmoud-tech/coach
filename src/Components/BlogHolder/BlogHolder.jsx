import React ,{useState , useEffect} from 'react'

function BlogHolder() {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setBlogs(data)
        })
        
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

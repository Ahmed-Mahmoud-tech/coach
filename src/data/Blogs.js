    const Blogs = {
        blog:[],
        
    }


    export const addblog = (newblog)=>{
        Blogs.blog.push(...newblog);
        console.log(Blogs.blog)
    }

export default Blogs;
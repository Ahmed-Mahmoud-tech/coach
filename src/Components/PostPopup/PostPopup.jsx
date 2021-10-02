import React , {useState, useContext} from 'react'
import Button from '../../Dependances/Button/Button'
import './PostPopup.scss'
import {addblog} from '../../data/Blogs';
import {BlogContext} from '../Content/Content';


function PostPopup(props) {

    const updatedblog = useContext(BlogContext)



    const [title , setTitle] = useState('');
    const [body, setBody] = useState('');
    const hidden = (e)=>{
        props.changeVal(false)
    }

    const handelSubmit =(e)=>{
        e.preventDefault();
        const blog = { title , body} ;
        console.log(blog)

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(()=>{
            hidden()
            addblog([blog])
            updatedblog.newmethod()
        })

    }
    return (
        <div className='popup'>
            <div className='overlay' onClick={hidden}></div>
            <form onSubmit={handelSubmit} className="popup-holder">
                <input 
                className='title' 
                type="text" 
                placeholder='Title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
                <textarea 
                placeholder='Your Post'
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <div className="popup-feature">
                    <span>Add Photo</span>
                    <span>Change Color</span>
                </div>
                <Button buttonName='Post'  />
            </form>
        </div>
    )
}

export default PostPopup

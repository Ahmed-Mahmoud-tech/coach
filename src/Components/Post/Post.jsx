import React , { useState}from 'react'
import PostPopup from '../PostPopup/PostPopup';
import './Post.scss'

function Post() {
    const [addPopup , setAddPopup] = useState(false);
    

    const addPopupFun = ()=>{
        setAddPopup(true)
        console.log(setAddPopup)
    }


    return (
        <div className='post'>
            <div className="post-holder">
                <div className="img"></div>
                <input className='post-input'   type="text" placeholder='Write Your Post' onClick={addPopupFun} />
                {addPopup && <PostPopup changeVal={(val) =>setAddPopup(val)} />}
            </div>
            
        </div>
    )
}

export default Post

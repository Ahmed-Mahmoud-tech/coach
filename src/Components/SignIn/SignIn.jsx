import React  from 'react'
import Button from '../../Dependances/Button/Button';
import {useHistory} from 'react-router-dom'


function SignIn() {

    let  history = useHistory();
    const toHome = (e)=>{
            e.preventDefault() ;
            history.push("/home") ;
    
    }
        
        
    return (
        <form>
            <label htmlFor="mail"> Enter your mail </label>
            <input id='mail' type="email" placeholder='Your Email' required/>
            <label htmlFor="password"> type your password </label>
            <input id='password' type="password" placeholder='Your Password' required/>
            <label htmlFor="check">Remember Me</label>
            <input id='check' type="checkbox"  />
            <a href="#">Forget my password</a>
            <Button buttonName = ' Submit' thefun={toHome} />
        </form>
    )
}

export default SignIn

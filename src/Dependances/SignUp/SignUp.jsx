import React from 'react'

function SingUp() {
    return (
        <form>
            <label htmlFor="mail"> Enter your mail </label>
            <input id='mail' type="email" placeholder='Your Email'/>
            <label htmlFor="password"> type your password </label>
            <input id='password' type="password" placeholder='Your Password'/>
            <label htmlFor="check">Remember Me</label>
            <input id='check' type="checkbox"  />
            <a href="#">Forget my password</a>
            <p>sing up laaaaaaaaaaaa</p>
        </form>
    )
}

export default SingUp

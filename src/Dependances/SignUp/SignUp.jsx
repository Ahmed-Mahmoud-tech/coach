import React from 'react'

function SingUp() {
    return (
        <form>
            <label htmlFor="name"> Enter your name </label>
            <input id='name' type="text" placeholder='Your Email'/>
            <label htmlFor="mail"> Enter your mail </label>
            <input id='mail' type="email" placeholder='Your Email'/>
            <label htmlFor="password"> type your password </label>
            <input id='password' type="password" placeholder='Your Password'/>
            <label htmlFor="repassword"> type your password again </label>
            <input id='repassword' type="password" placeholder='Your Password again'/>
        </form>
    )
}

export default SingUp

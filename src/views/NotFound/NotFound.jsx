import React from 'react'
import Header from '../../Components/Header/Header'
import Button from '../../Dependances/Button/Button'
import {useHistory } from 'react-router-dom' 
import './NotFound.scss'


function NotFound() {
    const history = useHistory();
    console.log(history)
    const goBack = ()=>{
        history.go(-1)
    }
    const goHome = ()=>{
        history.push('/home')
    }
    return (
        <div className='not-found'>
            <Header />
            <div className="not-found-holder">
                <h2>Ooops , This Page Isn't Available</h2>
                <p>may be removed or this is a worong link</p>
                <div className="buttons">
                    <Button buttonName='Go Back' thefun={goBack} />
                    <Button buttonName='Go to Home page' thefun={goHome} />
                </div>
                
            </div>
        </div>
    )
}

export default NotFound

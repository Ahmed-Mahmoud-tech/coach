import React from 'react'
import { Fragment } from 'react'

function Button(props) {
    
    
    return (
        <Fragment>
            <button onClick={props.thefun}> {props.buttonName}  </button>
        </Fragment>
    )
}

export default Button

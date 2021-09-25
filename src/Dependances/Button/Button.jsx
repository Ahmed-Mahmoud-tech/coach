import React from 'react'
import { Fragment } from 'react'

function Button(props) {
    
    
    return (
        <Fragment>
            <button onClick={props.c}> {props.buttonName}  </button>
        </Fragment>
    )
}

export function input(){
    return(
        <Fragment>
            <input type="submit"  />
        </Fragment>
    )

}

export default Button

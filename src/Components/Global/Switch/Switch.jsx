import React from 'react';
import './Switch.scss';

const Switch = (props) => {
    return (
        <>
            <div className="switchContainer">
                <p className="note">
                  {props.note}
                </p>
                <label className="switch">
                  <input type="checkbox" onChange={()=>props.status[1](!props.status[0])} />
                  <span className="slider round"></span>
                </label>
            </div>
        </>
    )
}

export default Switch;

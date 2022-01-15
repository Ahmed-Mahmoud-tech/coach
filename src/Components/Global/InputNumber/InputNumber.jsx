import React, { useState } from 'react';
import './InputNumber.scss';

const InputNumber = () => {

    let [number, setNumber] = useState(1);

    const countup = () => {
        if (number < 51) {
            setNumber(number++)
        }
    }

    const countdown = () => {
        if (number > 0) {
            setNumber(number--)
        }
    }


    return (
        <div className="inputNumber">
            <span className="increase" onClick={countup}>+</span>
            <span className="number data">{number}</span>
            <span className="decrease" onClick={countdown}>-</span>
        </div>
    )
}

export default InputNumber;
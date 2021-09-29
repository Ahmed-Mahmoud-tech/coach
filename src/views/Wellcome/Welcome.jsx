import React, {useState} from 'react'
import './Wellcome.scss'
import SignUp from '../../Components/SignUp/SignUp'
import Button from '../../Dependances/Button/Button'
import SignIn from '../../Components/SignIn/SignIn'
import { Link } from 'react-router-dom'

function Welcome() {
    const [compswitch, setcompswitch] = useState(false)
    const switchfun = () => {
        setcompswitch(!compswitch)
    }
    
    

    return (
        <section className="wellcome">
            <h1>wellcome to your <span>training suit</span> community </h1>
            <p>This is the right place to achieve your goal !</p>
            {compswitch ? <SignUp /> : <SignIn />}
<<<<<<< HEAD
            <Button buttonName = {compswitch ? "signin" : "signup"} thefun = {switchfun} />
=======
            <Button buttonName = {compswitch ? "signup" : "signin"} thefun = {switchfun} />
            <Link to="/home" >home</Link>
            
>>>>>>> 1c633f6c2a4b217bf92c261445d26b849e483d9e
        </section>
    )
}

export default Welcome

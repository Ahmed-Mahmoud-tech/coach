import React, {useState} from 'react'
import SignUp from '../../Components/SignUp/SignUp'
import Button from '../../Dependances/Button/Button'
import SignIn from '../../Components/SignIn/SignIn'

function Welcome() {
    const [compswitch, setcompswitch] = useState(false)
    const switchfun = () => {
        setcompswitch(!compswitch)
    }
    
    

    return (
        <section>
            <h1>wellcome to your training suit</h1>
            <p>description</p>
            {compswitch ? <SignUp /> : <SignIn />}
            <Button buttonName = {compswitch ? "signup" : "signin"} thefun = {switchfun} />
            <Link to="/home" >home</Link>
            
        </section>
    )
}

export default Welcome

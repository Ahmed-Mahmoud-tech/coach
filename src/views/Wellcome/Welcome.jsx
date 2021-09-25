import React, {useState} from 'react'
import SignIn from '../../Dependances/SignIn/SignIn'
import SingUp from '../../Dependances/SignUp/SignUp'
import Button from '../../Dependances/Button/Button'

function Welcome() {
    const [compswitch, setcompswitch] = useState(false)
    const switchfun = () => {
        setcompswitch(!compswitch)
    }
    
    

    return (
        <section>
            <h1>wellcome to your training suit</h1>
            <p>description</p>
            {compswitch ? <SingUp /> : <SignIn />}
            <Button buttonName = {compswitch ? "signup" : "signin"} thefun = {switchfun} />
        </section>
    )
}

export default Welcome

import React  from 'react'
import Button from '../../Dependances/Button/Button';
import {useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function SignIn() {



    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });



    let  history = useHistory();
    const toHome = (e)=>{
            e.preventDefault() ;
            history.push("/home") ;
    }

    const submitForm = (data) => {
        console.log(data);
    };        
        
    return (
        <div className='form'>
            <div className='title'>Sign In</div>
            <div className='inputs'>
                <form onSubmit={handleSubmit(submitForm)}>
                
                <input
                    type='text'
                    name='email'
                    placeholder='Email...'
                    {...register('email')}
                />
                <p> {errors.email?.message} </p>
                
                <input
                    type='password'
                    name='password'
                    placeholder='Password...'
                    {...register('password')}
                />
                <p> {errors.password?.message} </p>
                
                <input type='submit' id='submit' />
                <input type='button' id='reset' value='reset' reset onClick={() => reset({ firstName: '' , lastName:'' , email:'',age:'',password:'',confirmPassword:''}) } />
                </form>
            </div>
        </div>
    )
}

export default SignIn

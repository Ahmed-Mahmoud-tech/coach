import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt from 'jsonwebtoken';

import './Profile.scss';
const Profile = () => {
    let history = useHistory();
    const [userEmail, setUserEmail] = useState('...loading');
    const refreshtokenfun = async () => {
        var data = {oldToken:localStorage.getItem('refreshToken')}
        axios.post('http://localhost:4000/api/token', data)
        .then(res =>{
            localStorage.setItem('token', res.data.accessToken);
            getdata('http://localhost:4000/api/post');
        })
        .catch(err => {
            console.log(err)
        })

      }

      async function getdata(url=''){
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token'),
          },
        });

        try{
          let resOfPost = await response.json();
          setUserEmail(resOfPost.user.email)
        } catch {
            if(localStorage.getItem('refreshToken') != null && response.status == 403){
            refreshtokenfun();
          }else{
            logout()
          }
        }
      }


    useEffect(() => {
        if(jwt.decode(localStorage.getItem('token'))){
            getdata('http://localhost:4000/api/post');
          }else{
            logout()
          }
    }, [])

    const logout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      history.replace('/');
    }

    return (
        <div>
          <span className="logout" onClick={logout}>LOGOUT</span>
          <div>
            {userEmail}
          </div>
        </div>
    )
}
export default Profile; 
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt from 'jsonwebtoken';

import CouchTable from '../../Components/CoachTable/CoachTable';
import './Profile.scss';



const Profile = () => {


  const mainAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  mainAxiosInstance.interceptors.request.use(
    function (config) {
      if (config.url !== '/') {
        const token = localStorage.getItem('token');
        config.headers.authorization = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const refreshtokenfun = async (callEndPoint, endPoint) => {
    var data = { oldToken: localStorage.getItem('refreshToken') }
    axios.post(`${process.env.REACT_APP_API_URL}/token`, data)
      .then(res => {
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
      }).then(() => {
        callEndPoint(endPoint);
      })
      .catch(err => {
        logout()
      })
  }

  const apiCatch = (error, getdata, url) => {
    if (localStorage.getItem('refreshToken') != null && error.response.status == 403) {
      refreshtokenfun(getdata, url);
    } else {
      logout()
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    history.replace('/');
  }

  /********************************** */
  let history = useHistory();
  const [userEmail, setUserEmail] = useState('...loading');


  const getdata = async (url = '') => {
    await mainAxiosInstance.get(url).then((x) => {
      setUserEmail(x.data.user.email)
    }).catch((error) => {
      apiCatch(error, getdata, url)
    })
  }


  useEffect(() => {
    if (jwt.decode(localStorage.getItem('token'))) {
      getdata('post');
    } else {
      logout()
    }
  }, [])


  return (
    <div>
      <span className="logout" onClick={logout}>LOGOUT</span>
      <div>
        {userEmail}
        <CouchTable />
      </div>
    </div>
  )
}
export default Profile;
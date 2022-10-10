import * as React from 'react';
import { useState, useEffect } from 'react'; 
import Button from '@mui/material/Button';
import { Navigate } from "react-router-dom";
import axios from 'axios';

export default function GoogleLoginButton() {
    const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
    const redirect_uri = process.env.REACT_APP_GOOGLE_REDIRECT_URI || '';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile';
    const google_oauth_url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=google_login`;
    const [loggedIn,setLoggedIn] = useState(false);

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const code = queryParams.get('code');
      const state = queryParams.get('state');
  
      if(!code) return;
      if(!(state === 'google_login')) return;
      
      const data = {
        "provider": "google",
        "code": code
      }
      
      axios.post(process.env.REACT_APP_BACKEND_URL + `api/login/social/token/`,data)
      .then(() => setLoggedIn(true))
      .catch(error => {
          console.error('There was an error!', error);
      });
    },[]);

    return loggedIn? (<Navigate to="/" replace={true} />) : (
      <div>
        <Button href={google_oauth_url} variant="contained">Login with Google</Button>
      </div>
    );
  }
  
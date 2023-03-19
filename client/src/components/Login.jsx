import React from "react";
import { Container } from 'react-bootstrap';
const redirect_uri = 'https://spotifybyelnurxo.netlify.app/';
const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=b96a5a503973474cb7c99f854a33cb8c&response_type=code&redirect_uri=${redirect_uri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function Login() {
  return <Container className="d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>
    <a className="btn btn-success btn-lg" href={AUTH_URL}>Login With Spotify</a>
  </Container>;
}

export default Login;

import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import Login from '../loginForm';
import Register from '../registerForm';

export default function SignUp() {
  return (
    <>
      <h1 className='sign-up'>SIGNUP</h1>
      <Login/>
      <Register/>
      <Footer />
    </>
  );
}

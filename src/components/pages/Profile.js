import React, {Component} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar2 from '../Navbar2';

function login(){
    return (
        <div>login</div>
    )
}

function logout(){
    return (
        <div>logout</div>
    )
}


function Profile() {
    return (
      <>
       <Navbar2 />
      <h1 className='feed'>Profile</h1>
        <Footer />
      </>
    );
  }
  
  export default Profile;

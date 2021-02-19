import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import CardItem from '../CardItem';

import '../../App.css';

export default function Post() {
    return (
        <>
        <Navbar />
        <h1 className='post'>POST</h1>
        <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              src='images/bruno potm.jpeg'
              text='Bruno Fernandes is the new Premier League Player of the Month'
              label='Players'
              path='/post'
            />
          </ul>
          </div>
        <Footer />
      </>
    );
  }
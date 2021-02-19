import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these New Posts!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bruno potm.jpeg'
              text='Bruno Fernandes is the new Premier League Player of the Month'
              label='Players'
              path='/post'
            />
            <CardItem
              src='images/team.jpeg'
              text='Check out this 200k pro team'
              label='Squads'
              path='/post'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/arnold packed.jpeg'
              text='Lets goooo, i packed arnold TOTY!'
              label='Packs'
              path='/post'
            />
            <CardItem
              src='images/adama.jpeg'
              text='Amazing FUT Freeze ADAMA TRAORE'
              label='Players'
              path='/post'
            />
            <CardItem
              src='images/live stream.jpeg'
              text='Im going live guys! Link in da description!!!'
              label='Others'
              path='/post'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

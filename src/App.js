import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/pages/Search';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Feed from './components/pages/Feed';
import Post from './components/pages/Post';
import Profile from './components/pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/feed' component={Feed} />
          <Route path='/post' component={Post} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

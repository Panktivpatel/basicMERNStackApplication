import React from 'react';
import './Style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import RegistrationForm from './Registration';
import ProfilePage from './Profile';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" Component={RegistrationForm} />
          <Route exact path="/profile" Component={ProfilePage} />
      </Routes>
          
    </Router>
  );
};

export default App;
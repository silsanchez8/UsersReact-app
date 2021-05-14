import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import UsersNew from './pages/UsersNew';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header></Header>
      <UsersNew />
    </div>
  );
}

export default App;

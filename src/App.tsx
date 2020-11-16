import React from 'react';
import './App.css';
import {NavigationBar} from './Components/General/NavigationBar';
import {Footer} from './Components/General/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>

      <Footer/>
    </div>
  );
}

export default App;

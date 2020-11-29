import React, {useEffect, useState} from 'react';
import './App.css';
import {NavigationBar} from './Components/General/NavigationBar/NavigationBar';
import {Footer} from './Components/General/Footer/Footer';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    return (
    <div className="App">
      <NavigationBar/>
      <Footer/>
      <CircularProgress disableShrink />  {/*Testing material ui*/}
    </div>
  );
}

export default App;

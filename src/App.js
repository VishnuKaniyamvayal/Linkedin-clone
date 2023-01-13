import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
     <Header/>

        <div className="app__body">
          <Sidebar/>
          <Feed/>
        </div>
    </div>
  );
}

export default App;

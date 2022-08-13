import './App.css';
import {Route, Routes} from 'react-router-dom'
import React from 'react';
import EmptyPage from 'components/Empty/emptypage';
import Help from 'components/Help/help';
import Feed from 'components/Feed/feed';
import Home from 'components/Home/home';
function App() {
  return (
    <>
      <div className='text-position'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="feed" element={<Feed />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<EmptyPage />} />          
        </Routes>
      </div>
    </>
  );
}

export default App;

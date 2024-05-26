import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar';
import Web from './assets/pages/Web';
import Design from './assets/pages/Design';
import Software from './assets/pages/Software';
import Music from './assets/pages/Music/MusicSec';
// import Game from './assets/pages/Game/Game';
import Home from './assets/pages/Home';
import Navbar02 from './assets/components/Navbar02';
import D3Section from './assets/pages/D3/D3Section';

import Object01 from './assets/pages/ObjectProj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-300/20'>
      <Router>
        {/* <Navbar id='navOption'/> */}
        <Navbar02 />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/web' element={<Web/>} />
          <Route path='/software' element={<Software/>} />
          <Route path='/design' element={<Design/>} />
          <Route path='/myMusic' element={<Music/>} />
          {/* <Route path='/game' element={<Game/>} /> */}
          <Route path='/d3' element={<D3Section/>} />
          <Route path='/d3_obj' element={<Object01/>} />
        </Routes>

      </Router>
    </main>
  );
}

export default App

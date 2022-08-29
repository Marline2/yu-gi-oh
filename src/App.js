import {Routes, Route}from 'react-router-dom'

import Main from './Main';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;

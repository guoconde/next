import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateClient from './pages/createClient';
import EditClient from './pages/editClient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CreateClient />} />
        <Route path='/edit' element={<EditClient />} />
        {/* <Route path='/:path/:id' element={<ItemById />} /> */}
        {/* <Route path='/cart' element={<Cart />} /> */}
        {/* <Route path='/info' element={<UserInfo />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

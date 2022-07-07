import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListClient from './pages/clientList';
import CreateClient from './pages/createClient';
import EditClient from './pages/editClient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/create' element={<CreateClient />} />
        <Route path='/edit' element={<EditClient />} />
        <Route path='/' element={<ListClient />} />
      </Routes>
    </Router>
  );
}

export default App;

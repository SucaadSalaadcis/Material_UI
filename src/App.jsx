import React from 'react';
import { Route, Routes, BrowserRouter as B } from 'react-router-dom';
import Create from './Pages/Create';
import Notes from './Pages/Notes';
import Layout from './components/Layout';

export default function App() {
  return (

    <B>
      <Layout>

        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Notes />} />
        </Routes>
        
      </Layout>
    </B>

  );
}

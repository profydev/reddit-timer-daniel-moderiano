import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Search from './components/Search/Search';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <GlobalStyles />
      App Placeholder
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import Search from './components/Search/Search';
import Home from './components/Home/Home';
import theme from './theme';
import Header from './Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

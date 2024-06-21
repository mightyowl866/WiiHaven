// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WarningPage from './components/Warning.js';
import MainMenuPage from './components/MainMenu.js';
import OptionsMenu from './components/optionsMenu.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarningPage />} />
        <Route path="/main-menu" element={<MainMenuPage />} />
        <Route path="/optionsMenu" element={<OptionsMenu />} />
      </Routes>
    </Router>
  );
};

export default App;

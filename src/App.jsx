import React, { useContext } from 'react';
import { When } from 'react-if';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import SettingsForm from './components/SettingsForm';

import ToDo from './components/ToDo';
import { AuthContext } from './Context/Auth';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header />
    
      <When condition={isLoggedIn}>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/settings" element={<SettingsForm />} />
        </Routes>
      </When>
    </BrowserRouter>
  );
}

export default App;
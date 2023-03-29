
import React from 'react';

import ToDo from '../src/components/ToDo';

import SettingsForm from './components/SettingsForm/index'

import {BrowserRouter, Routes, Route} from 'react-router-dom';




export default class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/settings" element={<SettingsForm />} />
          <Route path="/" element={<ToDo />}  />
        
        </Routes>

        </BrowserRouter>
   
   </>
     
    );
  }
}
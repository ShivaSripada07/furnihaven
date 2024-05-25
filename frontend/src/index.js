import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponent';
import ContactComponent from './Components/ContactComponent';
import DashComponent from './Components/DashComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeComponent/>}/>
                <Route path='/login' element={<LoginComponent/>}/>
                <Route path="/signup" element={<RegisterComponent/>}/>
                <Route path='/contact' element={<ContactComponent/>}/>
                <Route path='/dashboard' element={<DashComponent/>}/>
            </Routes>
    </BrowserRouter>
);


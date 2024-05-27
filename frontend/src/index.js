import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import LoginComponent from './Components/LoginComponent';
import RegisterComponent from './Components/RegisterComponent';
import ContactComponent from './Components/ContactComponent';
import DashComponent from './Components/DashComponent';
import OrderComponent from './Components/OrderComponent';
import AdminOrderComponent from './Components/AdminOrderComponent';
import PrivateRoute from './routes/PrivateRoute';
import AdminPrivateRoute from './routes/AdminPrivateRoute';
import AdminDashComponent from './Components/AdminDashComponent';
import AddProductComponent from './Components/AddProductComponent';
//import AuthProvider from './hooks/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<AuthProvider>
    <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<HomeComponent/>}/>
                <Route path='/login' element={<LoginComponent/>}/>
                <Route path="/signup" element={<RegisterComponent/>}/>
                <Route path='/contact' element={<ContactComponent/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path='/dashboard' element={<DashComponent/>}/>
                    <Route path='/orders' element={<OrderComponent/>}/>
                    <Route element={<AdminPrivateRoute/>}>
                        <Route path='/admindashboard' element={<AdminDashComponent/>}/>
                        <Route path='/admin/orders' element={<AdminOrderComponent/>}/>
                    </Route>
                <Route path='/admin/addProduct' element={<AddProductComponent/>}/>
                </Route>
            </Routes>
    </BrowserRouter>
    //</AuthProvider>
);


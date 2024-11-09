import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Destination from './pages/Destination';
import Tours from './pages/Tours';
import CreateDestination from './pages/CreateDestination';
import CreateTour from './pages/CreateTour';
import Users from './pages/Users';
import NotFound from './components/page-components/NotFound';
import { ToastContainer } from 'react-toastify'; // Импортируем ToastContainer
import "./config/i18next";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Destination/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/create-destination' element={<CreateDestination/>}/>
        <Route path='/create-tour' element={<CreateTour/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}/>
      <ToastContainer /> {/* Добавляем ToastContainer здесь */}
    </div>
  );
}

export default App;

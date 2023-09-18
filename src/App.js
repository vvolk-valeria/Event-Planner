import React from 'react';
// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage/EventPage';
import EventCreationPage from './pages/EventCreationPage/EventCreationPage';
import EventEditingPage from './pages/EventEditingPage/EventEditingPage';
// const HomePage = lazy(() => import('./pages/HomePage'));


//import { refreshUser } from '../redux/auth/operations';


//const PhonebookPage = lazy(() => import('../pages/Phonebook'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
     
        <Route path="events/create" element={<EventCreationPage />} />
        <Route path="events/:eventId" element={<EventPage />} />
        <Route path="events/:eventId/edit" element={<EventEditingPage />} />

       <Route path="events/filter/:category" element={<HomePage />} />
      </Route>
      
    </Routes>
  );
};


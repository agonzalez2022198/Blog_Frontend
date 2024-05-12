import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import routes from './routes.jsx';

export const App = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
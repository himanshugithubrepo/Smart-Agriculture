import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Farmerdashboard from './pages/Farmerdashboard';
import Buyerdashboard from './pages/Buyerdashboard';
import Notificationpage from './pages/Notificationpage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Farmerdashboard />} />
      <Route path="/Buyerdashboard" element={<Buyerdashboard />} />
      <Route path="/Notificationpage" element={<Notificationpage />} />
    </Routes>
  </Router>
);

export default AppRouter;
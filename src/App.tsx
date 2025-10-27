import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';

import { Home } from './pages/Home';
import { Students } from './pages/Students';
import { Staff } from './pages/Staff';
import { Spells } from './pages/Spells';
import { Houses } from './pages/Houses';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navbarClasses = isHomePage
    ? 'w-full flex justify-between items-center py-4 px-[5%] absolute z-10 bg-black/40 shadow-md'
    : 'w-full flex justify-between items-center py-4 px-[5%] relative bg-hp-dark-blue shadow-md';

  return (
    <>
      <Navbar navClasses={navbarClasses} />
      
      <div>
        <Outlet />
      </div>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="students" element={<Students />} />
        <Route path="students/house/:houseName" element={<Students />} />
        <Route path="spells" element={<Spells />} />
        <Route path="houses" element={<Houses />} />
        <Route path="staff" element={<Staff />} />
      </Route>
    </Routes>
  );
}

export default App;
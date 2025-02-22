import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Navbar() {
  return (
    <div className="container">
      <Header />
      <main className="my-4" style={{ minHeight: "75vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Navbar;
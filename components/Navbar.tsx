import React from 'react';


const Navbar = () => (
  <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
    <div className="text-xl font-bold">Construction Co.</div>
    <div className="space-x-4">
      <p className="hover:underline">Home</p>
      <p  className="hover:underline">Projects</p>
      <p  className="hover:underline">Contact</p>
    </div>
  </nav>
);

export default Navbar;

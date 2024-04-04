import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="text-sm text-center">Developer - <b> Rishabh Chaudhary </b></div>
        <div className="text-sm text-center">&copy; {new Date().getFullYear()} Rishabh DSA. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

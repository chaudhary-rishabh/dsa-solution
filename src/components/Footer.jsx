import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-gray-400">Linkedin</a></li>
              
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">Github</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                <p className="text-sm">Email</p>
                <a href="#" className="hover:text-gray-400">Portfolio</a>
                <p className="text-sm">contact</p>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-sm text-center">Developer - <b> Rishabh Chaudhary </b></div>
        <div className="text-sm text-center">&copy; {new Date().getFullYear()} Rishabh DSA. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

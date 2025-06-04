

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import './Navbar.css';


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Predict', path: '/predict' },
//     { name: 'Result', path: '/result' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//     { name: 'Admin', path: '/admin' },
//   ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-red-600">CardioPredict</Link>
//         <div className="hidden md:flex space-x-6">
//           {navLinks.map(link => (
//             <Link key={link.name} to={link.path} className="text-gray-700 hover:text-red-500 transition font-medium">
//               {link.name}
//             </Link>
//           ))}
//         </div>
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2">
//           {navLinks.map(link => (
//             <Link key={link.name} to={link.path} onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-red-500 font-medium">
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css'; // ✅ Ensure correct path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Predict', path: '/predict' },
    { name: 'Result', path: '/result' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-brand">CardioPredict</Link>
        <div className="nav-links desktop">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
      {menuOpen && (
        <div className="nav-links mobile">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="nav-link" onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

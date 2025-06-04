// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//     </>
//   )
// }

// export default App



import { useState } from 'react';
import './App.css';
import './style.css';


import Home from './Pages/Home';
import Predict from './Pages/Predict';
import Result from './Pages/Result';
import About from './Pages/About';           // ✅ Correct default import
import Contact from './Pages/Contact';
import AdminDashboard from './Pages/AdminDashboard';
import Navbar from './Navbar';
import './Navbar.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/result" element={<Result />} />
         <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

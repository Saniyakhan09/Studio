

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Header from './Components/Header';
import Page1 from './pages/Page1';
// import TiltText from './Components/TiltText';
// import Page1Bottom from './Components/Page1Bottom';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import HireMe from './pages/HireMe';

const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={
          <>
            <Page1 />
            {/* <TiltText /> */}
            {/* <Page1Bottom /> */}
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />

          </>
        } />
        <Route path="/hireme" element={<HireMe />} /> 

      </Routes>
    </Router>
  );
};

export default App;

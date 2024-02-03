import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AppUno = lazy(() => import('uno/App'));
const AppDos = lazy(() => import('dos/App'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/uno">Rhapsody Uno</Link>
            </li>
            <li>
              <Link to="/dos">Rhapsody Dos</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/uno" element={<AppUno />} />
            <Route path="/dos" element={<AppDos />} />
            <Route path="/" element={<div>Home Page</div>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

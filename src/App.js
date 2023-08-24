import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import HomePage from './routes/homepage';
import CategoriesPage from './routes/catagory';

const App = () => (
  <Router>
    <div className="app">
      <nav>
        <div className="appName">
          <h1>Bookstore</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;

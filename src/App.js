import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import HomePage from './routes/homepage';
import CategoriesPage from './routes/catagory';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <nav>
        <div className="appName">
          <h1>Bookstore CMS</h1>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <span className="material-symbols-outlined">
          account_circle
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;

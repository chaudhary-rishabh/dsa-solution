import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error';
import Home from './pages/Home';
import Solution from './pages/Solution';
import CategoryList from './pages/CategoryList';
import Blog from './pages/Blog';
import Dsa from './pages/Dsa';
import Projects from './pages/Projects';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="dsa" element={<Dsa />} />
      <Route path="projects" element={<Projects />} />
      <Route path="frontend" element={<Frontend />} />
      <Route path="backend" element={<Backend />} />
      <Route path="solution" element={<Solution />} />
      <Route path="blog" element={<Blog />} />
      <Route path="categorylist" element={<CategoryList />}>
        <Route path="single" element={<Blog />} />
      </Route>
      <Route path="*" element={<Error/>} />
    </Route>
  )
  );
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

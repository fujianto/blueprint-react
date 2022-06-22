import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { lazy } from '@loadable/component'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home fallback={<div>Loading...</div>} />} />
      <Route path="about" element={<About fallback={<div>Loading...</div>} />} />
    </Routes>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
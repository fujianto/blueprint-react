import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { Provider } from 'react-redux';

import { store } from './store';

const Home = loadable(() => import('./pages/Home'));
const About = loadable(() => import('./pages/About'));

const container = document.getElementById('app') as Element;
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home fallback={<>Loading...</>} />} />
            <Route path="about" element={<About fallback={<>Loading...</>} />} />
        </Routes>
    );
};

root.render(
    <Provider store={store}>
        {/* Render component twice on strict mode for debugging */}
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
);

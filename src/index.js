//installing packages
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App.js';

// Setting up Javascript app
const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
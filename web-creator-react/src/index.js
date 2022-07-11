import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeIcons } from '@fluentui/react/lib/Icons';


initializeIcons("https://static2.sharepointonline.com/files/fabric/assets/icons/");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
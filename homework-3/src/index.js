import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AlbumsProvider } from './components/Task1/DataContext';
import { ContextForTask2Provider } from './components/Task2/DataContextForTAsk2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AlbumsProvider>
            <ContextForTask2Provider>
                <App />
            </ContextForTask2Provider>
        </AlbumsProvider>
    </React.StrictMode>
);


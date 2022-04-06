import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/DarkMode/theme-provider';
import RoutesAll from './routes';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>

            <RoutesAll />

        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);



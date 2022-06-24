import React from 'react';
import { Main, Navbar, Sidebar } from './components';

import './App.css';

export default function App() {
    return (
        <div>
            <Navbar />
            <div className='main-wrapper'>
                <Main />
                <Sidebar />
            </div>
        </div>
    );
}

import React from 'react';
import { useSelector } from "react-redux";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { selectUser } from './features/userSlice';

function App() {
    // Pull in user information from data layer using useSelector hook
    const user = useSelector(selectUser);
  return (
    <div className="app">
        {/* Render app components only if user is logged in*/}
        {user ? (
            <>
                <Sidebar />
                <Chat />
            </>
        /* Ternary operator if user is not logged in*/
        ): (
            <Login />
        )}
        
    </div>
  );
}

export default App;
